const mongoose = require ('mongoose')

const connectDB =async () => {
    try {
const conn =await mongoose.connect(process.env.MONGO_URI)
console.log(`Mongodb Connected : ${conn.connection.host}`.cyan.underLine)
    } catch (error) {
        console.log(error)
        proscess.exit(1)
    }
}

module.express = connectDB