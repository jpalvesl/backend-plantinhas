const Plant = require('../models/PlantSchema');

// exporta modulos contendo os metodos
module.exports = {
    async store(req, res) {
        const { name, string, diameter, height, latitude, longitude, date } = req.body

        
        arrayDiameters = diameter.split(",").map(num => {
            return Number(num)
        })

        const plant = await Plant.create({
            name,
            string,
            diameter: arrayDiameters,
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