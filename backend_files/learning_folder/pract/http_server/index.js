const http= require('http')

const server=http.createServer((req,res)=> {
    if(req.url === '/home'){
        res.write(' Welcome to the Home Page.');
        res.end()
    } else  if(req.url === '/cart'){
        res.write(' Welcome to the Cart Page.');
        res.end()
    }
    else {
        res.write('404 Error- Invalid url.')
    }
})


server.listen(8080,()=>{
    console.log('the server is running on port 8080')
})