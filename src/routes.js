const { Router } = require('express');
const { celebrate, Joi, Segments } = require('celebrate');

const PlantController = require('./controllers/PlantController');

const routes = Router()

routes.get('/', (req, res) => {
    res.json({routes: ['/all, /plantas']})
})

routes.get('/all', PlantController.index)

routes.post('/plants', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    folder: Joi.string().required(),
    string: Joi.boolean ().required(),
    diameter: Joi.array().required(),
    height: Joi.number().required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    date: Joi.date().required(),
  })
}), PlantController.store)

module.exports = routes;