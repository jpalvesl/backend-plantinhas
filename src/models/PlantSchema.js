const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
  name: String,
  diameter: Number,
  height: Number,
  location: {
    type: PointSchema,
    index: '2dsphere'
  }
})

module.exports = mongoose.model('Plant', PlantSchema)