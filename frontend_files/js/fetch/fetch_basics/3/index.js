fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>{
    lastUser=data[data.length-1];
    fetch(`https://jsonplaceholder.typicode.com/users?id=${lastUser.id}`)
    .then(res=> res.json())
    .then(data => console.log(data))
}).catch(err=> console.log(' the error is', err)
)