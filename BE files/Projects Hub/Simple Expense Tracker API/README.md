# Expense Tracker API

A simple **Expense Tracker API** built with **Node.js** and **Express** using a JSON file (`db.json`) as a mock database.  
This project helps practice **CRUD operations**, **query filtering**, **middleware**, and **basic API design**.

---

## Features

- **Create Expense** – `POST /expenses`  
- **Get All Expenses** – `GET /expenses`  
- **Get Single Expense by ID** – `GET /expenses/:id`  
- **Update Expense (Partial)** – `PATCH /expenses/:id`  
- **Delete Expense** – `DELETE /expenses/:id`  
- **Summary Total** – `GET /expenses/summary/total`  
- **Filter Expenses by Query Parameters** – e.g., `GET /expenses?category=Daily&title=Food`

---

## Installation

#### 1. Clone the repository:

```bash
git clone <your-repo-url>
cd <repo-folder>
```
#### 2. Install dependencies:
```js
npm install
```
#### 3. Start the server:
```js 
node server.js
```
#### 4. The server will run on:
```js
The server will run on:
```

--- 
### API Usage
- Create Expense
```js
POST /expenses
Content-Type: application/json

{
  "id": 1,
  "title": "Food",
  "amount": 250,
  "category": "Daily"
}
```
- Get All Expenses `GET /expenses`
- Get Single Expense `GET /expenses/1`
- Update Expense (PATCH)
```js
PATCH /expenses/1
Content-Type: application/json

{
  "amount": 300
}
```
- Delete Expense `DELETE /expenses/1`
- Get Total Expense `GET /expenses/summary/total` 
- Filter Expenses `GET /expenses?category=Daily&title=Food `

--- 

### Middleware

- Logger – Logs HTTP method, URL, and response time
- JSON Parser – express.json() to parse incoming JSON requests
--- 

### Notes

- Uses a local db.json file as a mock database
- Make sure the id is unique when adding new expenses
- Designed for learning purposes; production apps should use MongoDB or other databases
--- 
### Author
Nitesh Kumar 


