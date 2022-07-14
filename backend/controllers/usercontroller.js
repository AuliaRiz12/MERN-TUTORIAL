const jwt = require ('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express .async.handler')
const User = require('../models/userModel')
const registerUser = (req, res) => {
    res.json({Message: "Register User"})
}


module.exports = { registerUser}