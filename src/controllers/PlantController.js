const axios = require('axios');
const Plant = require('../models/PlantSchema');

// exporta modulos contendo os metodos
module.exports = {
    async store(req, res) {
        const { name, diameter, height, latitude, longitude } = req.body
        const date = new Date()
        
        
        const plant = await Plant.create({
            name,
            diameter,
            height,
            latitude,
            longitude,
            date
        })

        return res.json(plant)
    },

    async index(req, res) {
        const plant = await Plant.find()

        return res.json(plant)
    },
}