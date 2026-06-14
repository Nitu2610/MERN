const inventoryData = [
  { id: 101, name: 'Premium Wireless Mouse', category: 'Accessories', price: 25, rating: 4.5, inStock: true },
  { id: 102, name: 'Mechanical Gaming Keyboard', category: 'Accessories', price: 75, rating: 4.8, inStock: true },
  { id: 103, name: 'UltraWide 4K Monitor', category: 'Monitors', price: 400, rating: 4.2, inStock: false },
  { id: 104, name: 'Ergonomic Office Chair', category: 'Furniture', price: 150, rating: 4.6, inStock: true },
  { id: 105, name: 'USB-C Charging Hub', category: 'Accessories', price: 15, rating: 3.9, inStock: false }
];


const processDashboardData=(data)=>{
  let filteredData=data.filter(ele=> ele.inStock && ele.category === 'Accessories' );
  let finalData=filteredData.map((ele, i)=> {
    let {name:title,price:formattedPrice}=ele;
    return {title, formattedPrice:`$${formattedPrice}`};
  })
  console.log(finalData)
}
processDashboardData(inventoryData)