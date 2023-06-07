const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const auth = async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //Get Token
            token = req.headers.authorization.split(' ')[1]

            //Verify the token
            const decodeToken = jwt.verify(token, process.env.JWT_SECRET)

            //Get user from the token
            req.user = await User.findById(decodeToken.id)
            next()
        } catch(err) { 
            console.log(err)
            return res.status(401).json({error: 'Not authorized.'})
        }
    }

    if (!token){
        return res.status(401).json({error: 'Not authorized. No token.'})
    }

}

module.exports = { auth }