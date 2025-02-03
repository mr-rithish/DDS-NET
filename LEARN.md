## **🔧Important Files**

*Important files to note.*

### 💽DDS-NET/server.js

This will be used to start up the webapp with Node.js as well as establish API routes and statically serve the /src files. You can edit this to use API utilities with your own Arduino!

### 🧾DDS-NET/src/index.html

The bare html web page. This is controlled and manipulated with data.js

### 🎵DDS-NET/src/audio.js

Functions to handle the sound effects.

### ⌨️DDS-NET/src/terminal.js

Handles the termtext() function to simulate a terminal interface and bootup message.

### 📥DDS-NET/src/input.css

Main file for changing the CSS for those familiar with tailwindcss.

### 🔊DDS-NET/src/sounds/

.mp3's to be used with audio.js

### 🪟DDS-NET/src/views/

Contains all images.

### 🧮DDS-NET/src/data.css

Handles menus, forms, local storage, key bindings, and just about everything else. This is the main file to edit.

### 📊Data Management

All data is saved into the browser using local storage. However, uploaded user images are kept in IndexedDB.

## **🪄Custom UI**

DDS-NET Uses [Tailwindcss](https://tailwindcss.com/docs/styling-with-utility-classes) to handle all the CSS heavy lifting. When making changes to the UI, update continuously using the simple command in /DDS-NET.

```bash
npm run dev
```

## 💚Contributing

I love to see others create their own customized creations. DDS-NET was created with the idea of giving others the ability to create their own stylish cyberdeck for TTRPG management and entertainment. Just make sure to include credit.

1. Fork the repository.

2. Create a new branch for your changes.

3. Make your changes.

4. Test your changes.

5. Commit your changes.

6. Push your changes to your forked repository.

7. Create a pull request with a clear description.

Contributions to the core system are welcomed, while forks can have their own features.
