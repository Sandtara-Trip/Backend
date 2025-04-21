'use strict';

const destinationController = require('../controllers/destinationController');
const Joi = require('@hapi/joi');

const routes = [
  // Mendapatkan detail destinasi
  {
    method: 'GET',
    path: '/destinasi/{id}',
    options: {
      validate: {
        params: Joi.object({
          id: Joi.string().required().description('ID destinasi')
        })
      }
    },
    handler: destinationController.getDestinationDetail
  },
  
  // Mendapatkan detail hotel
  {
    method: 'GET',
    path: '/hotel/{id}',
    options: {
      validate: {
        params: Joi.object({
          id: Joi.string().required().description('ID hotel')
        })
      }
    },
    handler: destinationController.getHotelDetail
  },
  
  // Mendapatkan tipe kamar berdasarkan hotel (admin)
  {
    method: 'GET',
    path: '/admin/hotel/{hotelId}/rooms',
    options: {
      validate: {
        params: Joi.object({
          hotelId: Joi.string().required().description('ID hotel')
        })
      }
    },
    handler: destinationController.getRoomsByHotel
  }
];

module.exports = {
  plugin: {
    name: 'destination-routes',
    version: '1.0.0',
    register: async (server, options) => {
      server.route(routes);
    }
  }
};
