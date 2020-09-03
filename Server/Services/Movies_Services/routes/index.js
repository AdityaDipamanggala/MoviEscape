const router = require('express').Router()
const moviesRoutes = require('./movies')
const reviewsRoutes = require('./reviews')
const {readTokenInfo} = require('../middlewares/auth')

router.use(readTokenInfo)
router.use(reviewsRoutes)
router.use(moviesRoutes)


module.exports = router