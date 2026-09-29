import express from 'express';

export class Server {

    private app = express();

    async start() {

        // * Middlewares

        this.app.use( express.static( '/public' ) );

        // * Public folder

        this.app.listen(3000, () => {
            console.log('server running on 3000')
        })
    }
}