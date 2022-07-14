const express = require('express')
const router = express.Router()
const { 
    registerUser,
    loginUser,
    getMe } = require('..controllers/userController.js')

router.post('/',registerUser)

module.exports = router
app.use('/api/goals',require('./routes/goalRoutes.js'))
app.use('/api/goals',users('./routes/userRoutes.js'))