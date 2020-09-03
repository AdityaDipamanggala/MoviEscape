const jwt = require('jsonwebtoken')

const readTokenInfo = (req, res, next) => {
    const {access_token} = req.headers
    try{
        let decode = jwt.verify(access_token,'jwt-key')
        req.userData = decode
        next()
    }
    catch (err) {res.status(401).json({message: 'Wrong JWT Token'})}
}
const authentication = (req, res, next) => {
    if(req.userData.role === 'admin') next()
    else res.status(403).json({message: 'You are not authorized to do the action'})
}

module.exports = {authentication, readTokenInfo}