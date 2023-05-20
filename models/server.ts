import express, { Application } from 'express';
import userRoutes from '../routes/choferes';
import cors from 'cors';

import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        choferes: '/api/choferes'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Metodos iniciales
        this.dbConnection();
        this.middlewares();
        // Definir rutas
        this.routes();
    }

    async dbConnection() {

        try {
            
            await db.authenticate();
            console.log('Database online')
        } catch (error) {
            throw new Error();
        }
    }

    middlewares() {

        //CORS
        this.app.use( cors() );

        //Lectura del body
        this.app.use( express.json() );

        // Carpeta pública
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.apiPaths.choferes, userRoutes );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }
}

export default Server;