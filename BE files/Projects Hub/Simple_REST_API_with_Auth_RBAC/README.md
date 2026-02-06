# Backend Authentication & RBAC API

## Project Description

A complete backend REST API built with **Node.js, Express, and MongoDB**, implementing:

- **JWT-based authentication** (signup/login)  
- **Role-based access control (RBAC)** (admin vs user)  
- Full **CRUD operations** for products  
- `createdBy` field auto-set for product ownership  
- Proper error handling and status codes  

This project is interview-ready and demonstrates core backend development skills.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- dotenv
- nodemon

---

## Setup Instructions

1. Clone the repo:
```bash
git clone <your-repo-url>
cd <repo-folder>
```
2. Install dependencies: `npm install xyz`
3. Create a .env file in the root directory:
    ```js
    PORT=9001
    MONGODB_URI=<your-mongo-uri>
    JWT_SECRET=<your-secret-key>
    ```
4. Start the server: `npm run dev ` Server runs at http://localhost:9001.
---
### API Endpoints
#### Auth Routes
| Method | Endpoint      | Description          | Access        |
| ------ | ------------- | -------------------- | ------------- |
| POST   | /users/signup | Create a new user    | Public        |
| POST   | /users/login  | Login user & get JWT | Public        |
| GET    | /users/:id    | Get user details     | Authenticated |

#### Product Routes
| Method | Endpoint             | Description              | Access     |
| ------ | -------------------- | ------------------------ | ---------- |
| GET    | /product/allprod     | Fetch all products       | All users  |
| POST   | /product/add-product | Add a new product        | Admin only |
| PATCH  | /product/:id         | Partially update product | Admin only |
| PUT    | /product/:id         | Fully update product     | Admin only |
| DELETE | /product/:id         | Delete a product         | Admin only |

Note: createdBy is automatically set to the logged-in user ID when creating a product.

---
### Features
- JWT Authentication: Stateless login system
- RBAC: Admin vs User permissions
- CRUD: Full product management
- Error handling: 403, 404, 500 status codes
- Environment variables: Secure DB credentials and JWT secret

--- 
### Usage Example

#### 1. Sign up a new user:

```js
    POST /users/signup
    {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "12345",
    "role": "admin"
    }
```
#### 2. Login to get JWT token:

```js
    POST /users/login
    {
    "email": "john@example.com",
    "password": "12345"
    }
```
#### 3. Add product (Admin only):
```js
    POST /product/add-product
    Headers: Authorization: Bearer <JWT_TOKEN>
    Body:
    {
    "name": "Gold Ring",
    "description": "18k Gold",
    "price": 5000
    }
```


#### 4. Fetch all products:
```js   
    GET /product/allprod
    Headers: Authorization: Bearer <JWT_TOKEN>
```

---

#### Project Status
- Signup & Login with JWT
- Role-based access control
- Full CRUD for Products
- Error handling & proper status codes
- Populate createdBy for product ownership
---

#### License
This project is open-source and free to use for learning and interview preparation.
