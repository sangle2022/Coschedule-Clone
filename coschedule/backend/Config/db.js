const mongoose=require("mongoose")

require('dotenv').config()

const connection=mongoose.connect(process.env.MONGO_URL)
// mongodb+srv://vaibhav2416:vaibhav123@cluster0.kki49hi.mongodb.net/?retryWrites=true&w=majority

module.exports={
    connection
    
}