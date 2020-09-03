const routes = require('express').Router()
const UserController = require('./userController')

routes.post('/login/:role', UserController.login)
routes.post('/register/:role', UserController.register)

module.exports = routes