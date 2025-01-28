FROM node:22.13

WORKDIR /app
COPY package*.json ./

RUN apt-get update && apt-get install -y udev \
    && rm -rf /var/lib/apt/lists/*

RUN npm install
COPY . .

ENV PORT=80
EXPOSE 80

CMD ["npm", "start"]
