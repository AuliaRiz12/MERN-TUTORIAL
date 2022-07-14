const jwt = require ('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express .async.handler')
const User = require('../models/userModel')
const { exists } = require('../models/goalModel')

const registerUser = asyncHandle(async (req, res) => {
const { name, email, password } = req.body
if (!name || !email || !password){
    res.status(400)
    throw Error('Please add a fields')
}
// check if user exist
const userExists = await User.findOne({email})
if(userExists){
    res.status(400)
    throwEror('User already exists')
}
    res.json({Message: "Register User"})
})
const loginUser =asyncHandler(async(req,res)=>{
    res.json({Message: "login User"})
})
const getMe =asyncHandler(async(req,res)=>{
    res.json({Message: "User data display"})
})

module.exports = { registerUser}