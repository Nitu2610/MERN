# User Authentication API

A simple Node.js + Express authentication system with password hashing and JWT-based login.

## Features

- User registration with encrypted password
- Secure login with bcrypt password comparison
- JSON Web Token (JWT) authentication
- MongoDB database integration
- Error handling and status codes

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- bcrypt
- jsonwebtoken
- dotenv

## API Endpoints

### Create User
**POST** `/create-user`
Creates a new user and stores a hashed password.
```js
Request Body:
{
  "name": "User Name",
  "email": "user@email.com",
  "password": "yourpassword",
  "role": "user"
}
```

---

### Login User
**POST** `/login`

Authenticates user and returns JWT token.

```js
Request Body:
{
  "email": "user@email.com",
  "password": "yourpassword"
}

Response:
{
  "msg": "Login successful",
  "token": "JWT_TOKEN"
}
```

## Environment Variables

Create a `.env` file: `JWT_KEY=your_secret_key  
MONGO_URL=your_mongodb_connection  
PORT=3000`

## How It Works

1. Password is hashed using bcrypt before storing.
2. During login, entered password is compared with stored hash.
3. If valid, server generates a signed JWT token.
4. Token can be used to access protected routes.

## Run Locally

npm install  
npm start

## Security Notes

- Passwords are never stored in plain text.
- JWT tokens expire after a defined time.
- Invalid credentials return unauthorized response.

---

Built for learning backend authentication fundamentals.

