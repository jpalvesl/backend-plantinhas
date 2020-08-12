const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  uf: {
    type: String,
    required: true,
  },
  string: {
    type: Boolean,
    required: true,
  },
  diameter: [{
    type: [Number],
    required: true,
  }],
  height: {
    type: Number,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  part: {
    type: Object,
    required: true
  }
})

module.exports = mongoose.model('Plant', PlantSchema);