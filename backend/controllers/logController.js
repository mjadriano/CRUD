const Log = require('../models/logModel')

//create log
const createLog = async (req, res) => {
    const { type, description } = req.body
    const user = req.user.id

    try {
        const log = await Log.create({user, type, description})
        res.status(200).json(log)
    } catch(err) {
        res.status(400).json({error: err.message})
    }

}

//get logs per user
const getLogs = async (req, res) => {
    const logs = await Log.find({user: req.user.id})

    res.status(200).json(logs)
}

module.exports = {
    createLog,
    getLogs
}
