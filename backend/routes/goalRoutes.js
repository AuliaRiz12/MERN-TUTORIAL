const express = require('express')
const router = express.Router()
const {
    registerUser,
    loginUser,
    getMe } = require('../controllers/userController.js')
    const {protect} = require("../middleware/authMiddleware");

    router.route("/").get(protect, getGoals).post(protect, setGoal);
    router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);
    
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)

module.exports = router  