const router = require('express').Router()
const { getThesisTitle } = require('../controllers/openAIController')
const { getName } = require('../controllers/openAIController')
const { auth } = require('../middleware/authMiddleware')

router.route('/thesis').post(getThesisTitle)
router.route('/name').post(getName)

module.exports = router