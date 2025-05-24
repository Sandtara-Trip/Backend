'use strict';

const authRoutes = require('./auth');
const userRoutes = require('./user');
const uploadRoutes = require('./upload');
const adminRoutes = require('./admin');
const nearbyRoutes = require('./nearby');
const languageRoutes = require('./language');
const destinationRoutes = require('./destination');
const orderRoutes = require('./order');

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return {
                status: 'success',
                message: 'SandtaraTrip API is running',
                version: '1.0.0',
                documentation: 'API includes authentication, user management, media upload, and admin features'
            };
        }
    }
];

module.exports = {
    plugin: {
        name: 'api-routes',
        version: '1.0.0',
        register: async (server, options) => {
            // Register all route plugins
            await server.register([
                authRoutes,
                userRoutes,
                uploadRoutes,
                adminRoutes,
                nearbyRoutes,
                languageRoutes,
                destinationRoutes,
                orderRoutes
            ]);
            
            // Register root route
            server.route(routes);
        }
    }
};
