fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then( data=>{
    const firstUser=data[0];
    console.log('first output ' +firstUser);

    fetch(`https://jsonplaceholder.typicode.com/users?id=${firstUser.id}`)
    .then(res=> res.json())
    .then(data=> console.log(data))
}).catch(err=> console.log(err))