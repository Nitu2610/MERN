const http = require('http');

const server=http.createServer((req,res)=>{

    if(req.url=== "/home"){
        res.write("Welcome to home page!!");
        res.end();
    }else if(req.url==='/cart') {
        res.write("Here are cart page details");
        res.end()
    }else {
        res.write("404 page not found.");
        res.end()
    }

});


server.listen(8000,()=>{
    console.log('The server is running on port 8000')
})

// SImple server made from node- http.
// Used nodemon to stop always re-running the server, the nodemon take cares of looking for the changes in the server file and re-run it itself.