const express = require('express')
const cors = require('cors');
const { db } = require('../db/connection');
const fileUpload = require('express-fileupload')
// const { createServer } = require('http')

// const { dbConnection } = require('../database/config');
// const { socketController } = require('../sockets/controllers');

class Server {

    // definir atributo

    constructor() {
        this.app = express();
        this.port = process.env.PORT

        this.user = '/api/user'

        //conectar a base de datos
        this.conectarDB()

        //middlewares
        this.middlewares()

        // routes
        this.routes();

    }

    async conectarDB() {
        try {
            await db.authenticate()
            console.log('DATABASE ONLINE')
        } catch (error) {
            throw new Error(error)
        }
    }

    middlewares() {
        //CORS
        this.app.use(cors())

        //Directorio Publico
        this.app.use(express.static('public'))

        // const history = require('connect-history-api-fallback');
        // Lectura y parseo del body
        this.app.use(express.json())

        // this.app.use(express.urlencoded({ extended: true }));

        // cargar de archivos
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }));
    }

    routes() {
        this.app.use(this.user, require('../routes/usuarios'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("SERVIDOR CORRIENDO EN EL PUERTO", this.port)
        })
    }
}
module.exports = Server