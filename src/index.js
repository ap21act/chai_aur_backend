// require('dotenv').config({path:'./env'})

import dotenv from 'dotenv'
import {app} from './app.js'


import connectDB from "./database/index.js";
const port =process.env.PORT ||8000

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running at ${port}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed!!!",err)
})

/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from 'express'
const app=express()

const port =process.env.PORT


//EFE immeditae
;(async ()=>{

    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error",error);
            throw error
        })
        app.listen(port,()=>{
            console.log(`${port}`)
        })
        
    } catch (error) {
        console.error("Error:",error)
        
    }

})()


*/