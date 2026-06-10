let sortedData = (data) => {
  return data.sort((a, b) => a.name.localeCompare(b.name));
};

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data)
    let res = sortedData(data);
    // console.log(res)
    console.log(`the sorted data in ascending order is `, res);
  })
  .catch((err) => console.log(err));
