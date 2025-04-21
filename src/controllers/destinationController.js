const Boom = require('@hapi/boom');
const Destination = require('../models/Destination');
const Hotel = require('../models/Hotel');
const Room = require('../models/Room');

// Fungsi untuk menghitung jarak antara dua titik koordinat (dalam kilometer)
// Menggunakan rumus Haversine
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius bumi dalam kilometer
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c; // Jarak dalam kilometer
  return distance;
};

// @desc    Mendapatkan detail destinasi
// @route   GET /destinasi/{id}
// @access  Public
exports.getDestinationDetail = async (request, h) => {
  try {
    const { id } = request.params;
    
    // Cari destinasi berdasarkan ID
    const destination = await Destination.findById(id);
    
    if (!destination) {
      return Boom.notFound('Destinasi tidak ditemukan');
    }
    
    // Mendapatkan tempat makan terdekat (simulasi data)
    const nearbyFood = [
      {
        id: 'food1',
        name: 'Restoran Lokal',
        type: 'restaurant',
        cuisine: 'Indonesian',
        distance: 0.5, // km
        rating: 4.5,
        priceRange: '$$',
        address: `Jl. Dekat ${destination.name}, ${destination.location.city}`
      },
      {
        id: 'food2',
        name: 'Kafe Santai',
        type: 'cafe',
        cuisine: 'International',
        distance: 0.8, // km
        rating: 4.2,
        priceRange: '$$',
        address: `Jl. Sekitar ${destination.name}, ${destination.location.city}`
      }
    ];
    
    // Mendapatkan transportasi terdekat (simulasi data)
    const nearbyTransport = [
      {
        id: 'transport1',
        name: 'Terminal Bus',
        type: 'bus_station',
        distance: 1.2, // km
        address: `Terminal ${destination.location.city}`,
        routes: ['Route A', 'Route B', 'Route C']
      },
      {
        id: 'transport2',
        name: 'Stasiun Taksi',
        type: 'taxi_stand',
        distance: 0.3, // km
        address: `Jl. Utama ${destination.location.city}`,
        contact: '+62123456789'
      }
    ];
    
    // Mendapatkan hotel terdekat (simulasi data)
    // Dalam implementasi nyata, ini akan menggunakan query geospatial ke database
    const nearbyHotels = [
      {
        id: 'hotel1',
        name: `Hotel dekat ${destination.name}`,
        distance: 1.5, // km
        rating: 4.0,
        price: 500000,
        address: `Jl. Hotel ${destination.location.city}`
      },
      {
        id: 'hotel2',
        name: `Penginapan ${destination.location.city}`,
        distance: 2.1, // km
        rating: 3.8,
        price: 350000,
        address: `Jl. Penginapan ${destination.location.city}`
      }
    ];
    
    // Gabungkan semua informasi
    const result = {
      ...destination.toObject(),
      nearby: {
        food: nearbyFood,
        transport: nearbyTransport,
        hotels: nearbyHotels
      },
      mapUrl: `https://maps.example.com/?lat=${destination.location.coordinates[1]}&lng=${destination.location.coordinates[0]}`,
      weatherInfo: {
        current: {
          temp: 28, // Celsius
          condition: 'Sunny',
          humidity: 75,
          windSpeed: 10 // km/h
        },
        forecast: [
          { day: 'Today', high: 30, low: 24, condition: 'Sunny' },
          { day: 'Tomorrow', high: 29, low: 23, condition: 'Partly Cloudy' }
        ]
      }
    };
    
    return {
      success: true,
      data: result
    };
  } catch (error) {
    console.error(error);
    return Boom.badImplementation('Server Error');
  }
};

// @desc    Mendapatkan detail hotel
// @route   GET /hotel/{id}
// @access  Public
exports.getHotelDetail = async (request, h) => {
  try {
    const { id } = request.params;
    
    // Cari hotel berdasarkan ID
    const hotel = await Hotel.findById(id);
    
    if (!hotel) {
      return Boom.notFound('Hotel tidak ditemukan');
    }
    
    // Mendapatkan tipe kamar yang tersedia di hotel ini
    const rooms = await Room.find({ hotel: id });
    
    // Mendapatkan fasilitas hotel (simulasi data)
    const facilities = [
      {
        name: 'Swimming Pool',
        icon: '🏊‍♂️',
        description: 'Outdoor swimming pool with sun loungers'
      },
      {
        name: 'Restaurant',
        icon: '🍽️',
        description: 'On-site restaurant serving local and international cuisine'
      },
      {
        name: 'Spa',
        icon: '💆‍♀️',
        description: 'Full-service spa offering massages and treatments'
      },
      {
        name: 'Fitness Center',
        icon: '🏋️‍♂️',
        description: 'Fully equipped gym with modern equipment'
      },
      {
        name: 'Free WiFi',
        icon: '📶',
        description: 'High-speed internet access throughout the property'
      }
    ];
    
    // Mendapatkan ulasan hotel (simulasi data)
    const reviews = [
      {
        id: 'review1',
        user: 'John D.',
        rating: 4.5,
        comment: 'Great hotel with excellent service',
        date: '2025-03-15'
      },
      {
        id: 'review2',
        user: 'Sarah M.',
        rating: 5.0,
        comment: 'Perfect location and amazing facilities',
        date: '2025-03-10'
      },
      {
        id: 'review3',
        user: 'Michael R.',
        rating: 4.0,
        comment: 'Good value for money, would stay again',
        date: '2025-02-28'
      }
    ];
    
    // Gabungkan semua informasi
    const result = {
      ...hotel.toObject(),
      rooms: rooms.map(room => ({
        id: room._id,
        type: room.type,
        price: room.price,
        capacity: room.capacity,
        facilities: room.facilities,
        images: room.images
      })),
      facilities: facilities,
      reviews: reviews,
      averageRating: 4.5,
      totalReviews: 27,
      checkInTime: '14:00',
      checkOutTime: '12:00',
      policies: [
        'No pets allowed',
        'No smoking in rooms',
        'Children welcome',
        'Credit card required at check-in'
      ],
      mapUrl: `https://maps.example.com/?lat=${hotel.location.coordinates[1]}&lng=${hotel.location.coordinates[0]}`
    };
    
    return {
      success: true,
      data: result
    };
  } catch (error) {
    console.error(error);
    return Boom.badImplementation('Server Error');
  }
};

// @desc    Mendapatkan tipe kamar berdasarkan hotel
// @route   GET /admin/hotel/{hotelId}/rooms
// @access  Admin
exports.getRoomsByHotel = async (request, h) => {
  try {
    const { hotelId } = request.params;
    
    // Cek apakah hotel ada
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      return Boom.notFound('Hotel tidak ditemukan');
    }
    
    // Mendapatkan semua tipe kamar untuk hotel ini
    const rooms = await Room.find({ hotel: hotelId });
    
    return {
      success: true,
      count: rooms.length,
      data: rooms
    };
  } catch (error) {
    console.error(error);
    return Boom.badImplementation('Server Error');
  }
};
