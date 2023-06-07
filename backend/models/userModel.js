const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },

    middleName: {
        type: String
    },

    lastName: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    birthDay: {
        type: Date,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)