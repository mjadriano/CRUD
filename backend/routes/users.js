const router = require('express').Router()
const {
    createUser,
    loginUser,
    profileUser
} = require('../controllers/userController')
const { auth } = require('../middleware/authMiddleware')

router.post('/', createUser)
router.post('/login', loginUser)
router.get('/profile', auth, profileUser)

module.exports = router