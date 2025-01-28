// Main server file for use with Node.js
const express = require('express');
const bodyParser = require('body-parser');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const app = express();
const app_cpr = express(); 
const serverPort = 80; // Main port for SMT TTRPG
const serverPort_cpr = 4000; // Port for the future Cyberpunk Red version

// These can be ignored, used primarily to connect to my arduino to display lights and such for each menu.
let arduinoPort; // Serial port object for Arduino
let arduinoConnected = false; // Track Arduino connection status
const arduinoVendorId = '2341';
const arduinoProductId = '1002';

// Use body-parser to parse JSON payloads
app.use(bodyParser.json());

// Serve static files from the 'src' folder (frontend assets, HTML, CSS, JS)
app.use(express.static('src')); // SMT TTRPG Static Files
app_cpr.use(express.static('src-cpr')); // WIP Cyberpunk Red TTRPG Files

// Talks with the Arduino if one is detected.
async function connectToArduino() {
    const ports = await SerialPort.list();
    //console.log('Available ports:', ports);

    for (const port of ports) {
        if (port.vendorId === arduinoVendorId && port.productId === arduinoProductId) {
            //console.log(`Arduino detected at port: ${port.path}`);

            try {
                arduinoPort = new SerialPort({ path: port.path, baudRate: 9600 });
                const parser = arduinoPort.pipe(new ReadlineParser());

                arduinoPort.on('open', () => {
                    arduinoConnected = true;
                    //console.log('Arduino connected successfully!');
                });

                arduinoPort.on('error', (err) => {
                    //console.error('Error with Arduino connection:', err.message);
                });

                arduinoPort.on('close', () => {
                    arduinoConnected = false;
                    //console.warn('Arduino connection closed. Retrying...');
                    setTimeout(connectToArduino, 5000); // Retry upon disconnection
                });

                parser.on('data', (data) => {
                    //console.log(`Received from Arduino: ${data}`);
                });

                return; // Exit loop once connected
            } catch (err) {
                //console.error(`Failed to connect to Arduino at ${port.path}:`, err.message);
            }
        }
    }

    //console.warn('Arduino not found. Retrying...');
    setTimeout(connectToArduino, 30000); // 30 seconds
}

// Function to send commands to the Arduino
function triggerLED(command) {
    if (arduinoConnected) {
        arduinoPort.write(command + '\n', (err) => {
            if (err) {
                //console.error('Error writing to Arduino:', err.message);
            } else {
                console.log(`Sent command to Arduino: ${command}`);
            }
        });
    } else {
        //console.warn(`Arduino not connected. Command "${command}" ignored.`);
    }
}

// API routes for SMT TTRPG LED commands
app.get('/led/comp', (req, res) => {
    triggerLED("COMP");
    res.send('LED command "COMP" sent!');
});

app.get('/led/fight', (req, res) => {
    triggerLED("FIGHT");
    res.send('LED command "FIGHT" sent!');
});

app.get('/led/skills', (req, res) => {
    triggerLED("SKILLS");
    res.send('LED command "SKILLS" sent!');
});

app.get('/led/status', (req, res) => {
    triggerLED("STATUS");
    res.send('LED command "STATUS" sent!');
});

app.get('/led/change', (req, res) => {
    triggerLED("CHANGE");
    res.send('LED command "CHANGE" sent!');
});

app.get('/led/help', (req, res) => {
    triggerLED("HELP");
    res.send('LED command "HELP" sent!');
});

app.get('/led/online', (req, res) => {
    triggerLED("1");
    res.send('LED command "ONLINE" sent!');
});

// WIP CPR ARDUINO COMMANDS
app_cpr.get('/led/comp', (req, res) => {
    triggerLED("COMP");
    res.send('LED command "COMP" sent!');
});

app_cpr.get('/led/fight', (req, res) => {
    triggerLED("FIGHT");
    res.send('LED command "FIGHT" sent!');
});

app_cpr.get('/led/skills', (req, res) => {
    triggerLED("SKILLS");
    res.send('LED command "SKILLS" sent!');
});

app_cpr.get('/led/status', (req, res) => {
    triggerLED("STATUS");
    res.send('LED command "STATUS" sent!');
});

app_cpr.get('/led/change', (req, res) => {
    triggerLED("CHANGE");
    res.send('LED command "CHANGE" sent!');
});

app_cpr.get('/led/help', (req, res) => {
    triggerLED("HELP");
    res.send('LED command "HELP" sent!');
});

app_cpr.get('/led/online', (req, res) => {
    triggerLED("1");
    res.send('LED command "ONLINE" sent!');
});

// Start the web server
app.listen(serverPort, () => {
    console.log(`SMT Web app is running at http://localhost:${serverPort}`);
    connectToArduino(); // Attempt to connect to Arduino on startup
});

app_cpr.listen(serverPort_cpr, () => {
    //console.log(`CPR Web app is running at http://localhost:${serverPort_cpr}`);
    connectToArduino(); // Attempt to connect to Arduino on startup
});