const asyncHandler = require(`express-async-handler`)
const Goal = require('../models/goalModel')
//@desc    Get goals
//@route   GET /api/goals
//@access  Private
const getGoals = asyncHandler (async(req,res) => {
        const goals = await Goal.create({
            text: req.body.text,
            user: req.user.id,

        });
    res.status(200).json(goals);
});
//@desc    Set goals
//@route   POST /api/goals
//@access  Private
const setGoals =asyncHandler(async(req,res) => {
if (!req.body.text){
    res.status (400)
    throw new Error ('Please add a text field')
}
const goal = await Goal.create({
    text: req.body.text
})
res.status(200).json(Goal)
})

// @desc    Update goals
// @route   PUT /api/goals/:id
// @access  Private 
const updateGoal = asyncHandler(async(req,res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}`})
})
// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private 
const deleteGoal = asyncHandler (async(req,res) => {
    const goal = await Goal.findById(req.params.id)
        if (!goal) {
            res.status(400)
            throw new Error('Goal not found')
        }

        await goal.remove()
    
        res.status(200).json({id: req.params.id})
})
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}

// @desc  Register user
// @route POST/api/users
// @access Public
const registerUser = (req, res) => {
    res.json({messege: "Register User"})
}

// @desc Login user
// @route POST/api/users/login
// @access public
const loginUser = (req,res) => {
    res.json({message: "Login user"})
}

// @desc  Get user data
// @route Get/api/user/me)
// @access Public
const getme =(req,res)=> {
    res.json({message:"User data display"})
}

module.exports ={
    registerUser,
    loginUser,
    getMe
}