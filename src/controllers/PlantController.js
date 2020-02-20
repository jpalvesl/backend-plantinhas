const axios = require('axios');
const Plant = require('../models/PlantSchema');

// exporta modulos contendo os metodos
module.exports = {
    async store(req, res) {
        const { name, diameter, height } = req.body

        const plant = await Plant.create({
            name,
            diameter,
            height
        })
        return res.json(plant)
    },

    async index(req, res) {
        const plant = await Plant.find()

        return res.json(plant)
    },
}