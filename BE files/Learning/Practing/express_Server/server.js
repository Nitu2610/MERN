const express= require('express');
const fs=require('fs')

const server=express();

server.use(express.json());

server.get('/home',(req,res)=>{
    // res.send() take care of res.write() and res.end incomparison to http server
    res.send('Welocome to express server home page. ')
})

server.get('/cart', (req,res)=>{
    res.send('Welcome to express server Cart page.')
})

server.post('/add-user', (req,res)=>{
   // console.log(req.body)
   let clientData=req.body;

  let internalUserData=fs.readFileSync("./db.json","utf-8");
  let parsedInternalUserData=JSON.parse(internalUserData);

  parsedInternalUserData.users.push(clientData);
  let stringifiedInternalUserData=JSON.stringify(parsedInternalUserData);

  fs.writeFileSync("./db.json",stringifiedInternalUserData)

  console.log( stringifiedInternalUserData);
    res.send(`The data : ${req.body} has been received successfully.`)
})

server.get('/user-data', (req,res)=>{
    const data= fs.readFileSync("./db.json",'utf-8')
    res.send(data)
})

const PORT=8050;

server.listen(PORT, ()=> console.log(`server runs on the port ${PORT}`))