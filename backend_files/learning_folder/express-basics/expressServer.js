const express=require("express");
const fs= require('fs')

const server=express();
server.use(express.json()); // its for the server to read the json data client is sending to server. If its is missed then in the terminal we cant read the client data and it will reflect as undefined.
const PORT=3001;

server.get('/home',(req,res)=>{
    res.send("The home page details fromm express")
});

server.post('/add-user',(req,res)=>{
    const clientData=req.body;
    console.log(clientData); // this console.log will show data in the server terminal not in browser 
    const internalData=fs.readFileSync('./db.json',"utf-8");
    const parsedData=JSON.parse(internalData);
    parsedData.data.push(clientData);
    fs.writeFileSync('./db.json',JSON.stringify(parsedData))
    res.send(`the data saved successfully- ${clientData}`)

})

server.get("/all-users",(_,res)=>{
const internalUserData=fs.readFileSync('./db.json',"utf-8");
res.send(internalUserData)
})


server.listen(PORT,()=>{
    console.log('The express server is running on the port 3001.')
})

//Restful API's : HTTPS methods(get,post, put/patch, delete) and to perform crud operations on the resources. It send back the responses in the JSON format.