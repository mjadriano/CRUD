const User = require('../models/userModel')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// @desc    User registration
// @route   api/users
const createUser = async (req, res) => {
    const { firstName, middleName, lastName, gender, birthDay, email, password } = req.body

    if (!firstName || !lastName || !gender || !birthDay || !email || !password){
        return res.status(400).json({error: 'Please fill up the required fields.'})
    }

    if (!validator.isEmail(email)){
        return res.status(400).json({error: 'Please enter a valid email address.'})
    }

    if (!validator.isStrongPassword(password)){
        return res.status(400).json({error: 'Password must be at least 8 characters long, with at least one number, symbol, lowercase letter, and uppercase letter.'})
    }

    //Check if email already exist
    const userExist = await User.findOne({email})
    if (userExist){
        return res.status(400).json({error: 'User already exist.'})
    }

    //Hash password
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt) 

    //Create user (Insert)
    try {
        const user = await User.create({ firstName: firstName, middleName: middleName, 
            lastName: lastName, gender: gender, birthDay: birthDay, email: email, password: hashedPassword})
        res.status(201).json({
            email: user.email,
            firstName: user.firstName,
            middleName: user.middleName, 
            lastName: user.lastName,
            token: generateToken(user._id)
        })
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

// @desc    User Authentication
// @route   api/users/login
const loginUser = async (req, res) => {
    const { email, password } = req.body

    //Validations
    if (!email || !password ){
        return res.status(400).json({error: 'Please enter email/password.'})
    }

    //Check if email exist
    const user = await User.findOne({email});

    //Compare the hashed password
    if (user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            email: user.email,
            firstName: user.firstName,
            middleName: user.middleName, 
            lastName: user.lastName,
            token: generateToken(user._id)
        })
    }

    else {
        return res.status(400).json({error: "Wrong email/password."})
    }

}

// @desc    User Profile
// @route   api/users/profile
const profileUser = async (req, res) => {
    const { _id, firstName, middleName, lastName, email } = await User.findById(req.user.id)
    res.status(200).json({
        _id,
        firstName: firstName, 
        middleName, 
        lastName, 
        email
    })
}

//Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })
}

module.exports = {
    createUser,
    loginUser,
    profileUser
}
