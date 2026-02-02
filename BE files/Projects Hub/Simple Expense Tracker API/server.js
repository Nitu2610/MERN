const express = require("express");
const fs = require("fs");

const server = express();
server.use(express.json());

const parsedData = (data) => JSON.parse(data);
const stringifyData = (data) => JSON.stringify(data);

const dataBaseFilePath = "./db.json";
const readData = (path) => fs.readFileSync(path, "utf8");
//-------------------------------
const writeData = (path, dataToBeWritten) => {
  // console.log(stringifyData(({"expenses": dataToBeWritten})));
  fs.writeFileSync(path, stringifyData({ expenses: dataToBeWritten }));

  //   if (typeof dataToBeWritten !== "string") {
  //     return fs.writeFileSync(path, stringifyData(({"expenses": dataToBeWritten})) );
  //   } else {
  //     return fs.writeFileSync(path, stringifyData(({"expenses": dataToBeWritten})) );
  //   }
};

//---------Middleware
const logger=(req,res,next)=>{
    let reqTime=Date.now();
    console.log(`HTTP Method :- ${req.method}`);
    console.log(`URL :- ${req.originalUrl}`);
   // console.log(`Req Time :- ${new Date().toISOString()}`);
   res.on('finish', ()=> console.log(`req-res time: ` , Date.now() - reqTime, " ms"))  // Attach an event listener to the response object  👉 finish fires after the response is fully sent
   next();
}

// -------------
server.use(logger)

server.post("/expenses", (req, res) => {
  let clientData = req.body;
  let internalData = readData(dataBaseFilePath);
  let parsedInternalData = parsedData(internalData).expenses;
  console.log(parsedInternalData);

  if (Array.isArray(clientData)) {
    for (let i = 0; i < clientData.length; i++) {
      parsedInternalData.push(clientData[i]);
    }
  } else {
    parsedInternalData.push(clientData);
  }
  writeData(dataBaseFilePath, parsedInternalData);
  res.status(201).send(" the data is been created successfully.");
});

server.get("/expenses", (req, res) => {
  res.send(readData(dataBaseFilePath));
});

server.get("/expenses/:id", (req, res) => {
  const expenceId = Number(req.params.id);

  fs.readFile(dataBaseFilePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Failed to read database." });
    }
    const db = parsedData(data);
    const expenceDetails = db.expenses.find((item) => item.id === expenceId);

    if (!expenceDetails) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json(expenceDetails);
  });
});


server.get('/expenses/summary/total',(req,res)=>{
    let data=(parsedData(readData(dataBaseFilePath))).expenses;
    let totalExpense=0;
    data.forEach(item => totalExpense+= item.amount);

    res.json(({"Total Expense : ": totalExpense}))

})

server.delete("/expenses/:id", (req, res) => {
  const expenseId = Number(req.params.id); // to capture the id from the req url.
  let data = parsedData(readData(dataBaseFilePath)).expenses;
  let updatedDataAfterDelete = data.filter((item) => item.id !== expenseId);
  //  console.log(updatedDataAfterDelete);
  writeData(dataBaseFilePath, updatedDataAfterDelete);
  res.status(200).json({
    message: ` The data is been deleted and updata data is ${updatedDataAfterDelete}`,
  });
});

server.patch("/expenses/:id", (req, res) => {
  let clientData = req.body;
  const expenseId = Number(req.params.id);
  let data = parsedData(readData(dataBaseFilePath)).expenses;

  let updatedData = data.map((item) => {
    return item.id === expenseId ? { ...item, ...clientData } : item;
  });

  console.log(updatedData);
  writeData(dataBaseFilePath, updatedData);
  res.status(200).json({ message: `The data base is updated :${updatedData}` });
});

// I need to work on the api end point- GET /expenses?category=Daily

server.get('/expenses',(req,res)=>{ 
    const {category}= req.query;
    let data= (parsedData( readData(dataBaseFilePath))).expenses;

    const allowedFilterKey=['category', 'amount', 'title'];
    let result;

    Object.entries(req.query).forEach(([key, value])=>{
       result= data.filter((item)=>{
        item.includes(key) === item.includes(key[value]) 
        })
    })
    console.log(result)

})

const PORT = 7001;

server.listen(PORT, () => {
  console.log(`server is running on the port ${PORT}`);
});
