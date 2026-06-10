fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=> res.json())
.then(data=>{
    let searchTitle="sunt"
  let res=  data.filter((e,i)=> e.title.includes(searchTitle))
console.log(res)
}).catch(err=> console.log(err))