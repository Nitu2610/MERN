- .env is used to ensure the private url or data is not visible publically. 
    1. install the dotenv- npm i dotenv
    2. create a seperate file(.env) inside it have a variable in caps without(let, var,const)
    3. now import it in the db.js file- > `const dotenv= require('dotenv').config();  ` `config()` is must to ensure dotenv can be configure. 
    4. `const url = process.env.MONGO_URL;` this will make the thinks connected.