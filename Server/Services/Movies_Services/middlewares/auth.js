const jwt = require('jsonwebtoken')

const readTokenInfo = (req, res, next) => {
    const {acess_token} = req.headers
    try{
        let decode = jwt.verify(acess_token,'jwt-key')
        req.userData = decode
        next()
        return req.userData
    }
    catch (err) {res.status(401).json({message: 'Wrong JWT Token'})}
}
const authentication = (req, res, next) => {
    let userInfo = readTokenInfo()
    if(userInfo.role === 'admin') next()
    else res.status(403).json('You are not authorized to do the action')
}

module.exports = {authentication, readTokenInfo}