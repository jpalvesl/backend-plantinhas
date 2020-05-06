const Plant = require('../models/PlantSchema');

// exporta modulos contendo os metodos
module.exports = {
    async store(req, res) {
        const { name, folder, string, diameter, height, latitude, longitude, date } = req.body

        const plant = await Plant.create({
          name,
          folder,
          string,
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