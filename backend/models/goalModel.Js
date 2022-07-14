const mongoose = require ('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true,'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'please add a password']
    },

    
        Text: {
            type : String,
            required: [true, 'Please add a text value']
        },

        timestamps: true,
})   

module.exports = mongoose.model ('Goals' , goalSchema)