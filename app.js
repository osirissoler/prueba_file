require('dotenv').config(); // los archivos .env
const Server = require("./models/server")


const server = new Server()


server.listen()