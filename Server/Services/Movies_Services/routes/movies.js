const routes = require('express').Router()
const Controller = require('../controllers/movie')
const {authentication} = require('../middlewares/auth')

routes.get('/movies',Controller.showAllMovie)
routes.get('/movies/:id',Controller.showMovieById)
routes.use(authentication)
routes.post('/movies', Controller.createMovie)
routes.put('/movies/:id',Controller.updateMovie)
routes.delete('/movies', Controller.deleteMovie)

module.exports = routes