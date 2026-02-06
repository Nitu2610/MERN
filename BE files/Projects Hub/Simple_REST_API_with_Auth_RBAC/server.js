const express=require('express');
const connection = require('./config/db');
const dotenv=require('dotenv').config();



const server=express();





const PORT=process.env.PORT || 3000;

server.listen(PORT, async(req , res)=>{
    try {
        await connection;
        console.log(` Server is running on the port ${PORT}.`)
        console.log(` Database is linked and connected.`)
    } catch (error) {
        console.log(` Unable to connect with server or database due to error: ${error}`)
    }
})
