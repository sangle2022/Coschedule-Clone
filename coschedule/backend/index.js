const express=require("express")

const {connection} =require("./Config/db")
require('dotenv').config()

const cors = require('cors')

const { userController } = require("./Routes/signup.routes")
const PORT= process.env.PORT || 5000
const app=express()
app.use(express.json())

app.use(cors())

app.use("/",userController)

app.listen(PORT,async()=>{
    try  {
        await connection
        console.log("connected to db");
    } 
    catch (error){
        console.log(error);
        console.log("failed");
    }
    console.log("listening port");
})



