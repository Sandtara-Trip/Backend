'use strict';

const Hapi = require('@hapi/hapi');
const connectDB = require('./src/config/database');
require('dotenv').config();

// Import routes
const routes = require('./src/routes');

const init = async () => {
  // Connect to MongoDB
  await connectDB();

  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    routes: {
      cors: {
        origin: ['*'], // Allow all origins
      },
    },
  });

  // Register routes plugin
  await server.register(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
