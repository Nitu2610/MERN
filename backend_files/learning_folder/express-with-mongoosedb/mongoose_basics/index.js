const mongoose = require("mongoose");

const url = `mongodb://127.0.0.1:27017/mongooseLearning`; // --> 'mongodb://' It tells that we are connecting using MongoDB protocol; '127.0.0.1' is the laptop IP address ; ':27017' is the port number of mongodb port; 'mongooseLearning' is the database name, If this database does not exist, MongoDB creates it automatically when you store data inside it.

//step 1:

const structuingOrSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: {type:String, required:true}, // type defines the expected data type of the field, and required ensures that the field must be provided before saving data to the database.
});

// step 2:

const Model = mongoose.model("data", structuingOrSchema); // model is created via constructor fn,  in which "data" & "structuringOrScheme" are the parameter passes. "data" is the colleciton_name which must be singules as mongoose will convert it to plurul

const main = async () => {
  // async fn is used to capture the error if any when trying to connect.
  try {
    const connection = await mongoose.connect(url); // '.connect(url)'  is used to connect .
    console.log(" Mongoose is connected.");
    const user= new Model({ // Here new from constructor fn and only one data is passed
      name: "Nitesh",
      age: 29,
      email: "nitesh@gmail.com",
    });
    await user.save(); // if only one data is sent then we need to manually save it with 'save()'
    //We create a document instance using new Model() which holds the actual data. This instance is usually stored in a variable (like user), and .save() is called on that variable to store the data in the database.
    await Model.insertMany([ // Here we pass multiple data's. In the mongoDb we have '--v(version)' for each data, and it tell how many time the data is update.
      {
        name: "Nitesh Kumar",
        age: 28,
        email: "niteshkumar@gmail.com",
      },
      { name: "Pratiksha", age: 26, email: "pratiksha@gmail.com" },
      { name: "Bharath", age: 25, email: "bharath@gmail.com" },
    ]);
    connection.disconnect();
    console.log(" Data is saved and Mongoose is disconnected.");
  } catch (error) {
    console.log(`There is a error in the mongoose connection, error: `, error);
  }
};

main();
