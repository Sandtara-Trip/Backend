const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nama destinasi harus diisi'],
    trim: true
  },
  detail: {
    type: String,
    required: [true, 'Detail destinasi harus diisi']
  },
  price: {
    type: Number,
    required: [true, 'Harga destinasi harus diisi']
  },
  benefits: [{
    type: String,
    trim: true
  }],
  restrictions: [{
    type: String,
    trim: true
  }],
  images: [{
    type: String,
    default: 'default-destination.jpg'
  }],
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    },
    address: {
      type: String,
      required: [true, 'Alamat destinasi harus diisi']
    },
    city: {
      type: String,
      required: [true, 'Kota destinasi harus diisi']
    },
    province: {
      type: String,
      required: [true, 'Provinsi destinasi harus diisi']
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Destination', DestinationSchema);
