const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
  name: String,
  diameter: Number,
  height: Number,
  latitude: Number,
  longitude: Number,
  date: Date
})

module.exports = mongoose.model('Plant', PlantSchema)