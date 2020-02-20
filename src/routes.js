const { Router } = require('express');
const PlantController = require('./controllers/PlantController');

const routes = Router()

routes.get('/', (req, res) => {
    res.json({Plantinhas: 'true'})
})

routes.get('/all', PlantController.index)

routes.post('/plantas', PlantController.store)

module.exports = routes;