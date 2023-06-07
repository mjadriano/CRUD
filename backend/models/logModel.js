const mongoose = require('mongoose')
const Schema = mongoose.Schema

const logSchema = new Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    type: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Log', logSchema)