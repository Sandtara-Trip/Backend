'use strict';

const Hapi = require('@hapi/hapi');
require('dotenv').config();

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost',
        routes: {
            cors: {
                origin: ['*']
            }
        }
    });

    // Register routes
    await server.register([
        require('./routes')
    ]);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
