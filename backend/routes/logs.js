const router = require('express').Router()
const {
    createLog,
    getLogs
} = require('../controllers/logController')
const { auth } = require('../middleware/authMiddleware')

router.route('/').post(auth, createLog).get(auth, getLogs)

module.exports = router