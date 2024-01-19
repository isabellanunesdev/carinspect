FROM node:20
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY src/ ./src/
EXPOSE 3333
CMD ["node", "src/server.js"]
