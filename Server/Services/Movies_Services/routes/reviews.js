const routes = require('express').Router()
const Controller = require('../controllers/review')

routes.get('/reviews',Controller.showAllReview)
routes.get('/reviews/:id',Controller.showReviewById)
routes.post('/reviews', Controller.createReview)
routes.put('/reviews/:id',Controller.updateReview)
routes.delete('/reviews', Controller.deleteReview)

module.exports = routes