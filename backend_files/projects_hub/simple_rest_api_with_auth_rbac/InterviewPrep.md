# Backend Project Interview Questions

## 1. What tech stack did you use for this project?

**Answer:** Node.js, Express.js, MongoDB with Mongoose, JWT for authentication, dotenv for environment variables, nodemon for development.

## 2. How does user signup work?

**Answer:** The client sends name, email, password, and role. The server validates and saves the user in MongoDB. Signup does not return a JWT; the token is generated only during login.

## 3. How does user login work?

**Answer:** The client sends email and password. The server verifies the credentials in the database. On success, it generates a JWT containing `userId` and `role`, which is returned to the client.

## 4. What is JWT and why did you use it?

**Answer:** JWT (JSON Web Token) is a stateless token that encodes user information. It is used to authenticate requests without storing sessions on the server, making the API scalable.

## 5. How does role-based access control (RBAC) work in your project?

**Answer:** Each user has a role: `admin` or `user`. The `checkRole` middleware reads `req.user.role` from JWT. Admins can create, update, and delete products. Users can only read products.

## 6. How do you protect routes in your API?

**Answer:** Protected routes use the `auth` middleware. It verifies the JWT token from the `Authorization` header. Only valid tokens allow access to the route. Role checks are applied after authentication.

## 7. What is the purpose of `createdBy` in the Product model?

**Answer:** `createdBy` stores the `_id` of the user who created the product. This helps track ownership and can be used for auditing or populating user details in responses.

## 8. Why do you use `.populate()` in MongoDB?

**Answer:** `.populate()` replaces an ObjectId reference with the actual document. In this project, `createdBy` is populated to show the creator's name and email instead of just the ID.

## 9. How do you handle errors in your project?

**Answer:** All routes use `try/catch`. Responses include status codes and messages. Examples: `500` for server errors, `401` for unauthorized, and `403` for forbidden access.

## 10. Why did you not return JWT during signup?

**Answer:** Returning JWT at signup is optional. In this project, signup only creates a user. JWT is generated during login to ensure only verified credentials are allowed access to protected routes.

## 11. What is the difference between authentication and authorization?

**Answer:** Authentication verifies the identity of a user (login). Authorization determines what an authenticated user can access (e.g., admin vs user permissions).

## 12. How do you enforce that only admins can add products?

**Answer:** The `checkRole` middleware checks `req.user.role` from JWT. If the role is not `admin`, it returns `403 Forbidden`. Only admins can proceed to the route handler.

## 13. Can a normal user fetch product details?

**Answer:** Yes, normal users can access GET routes for products. They cannot create, update, or delete products.

## 14. How do you automatically set `createdBy` when adding a product?

**Answer:** In the product creation route, `createdBy` is set from `req.user.userId` which comes from the decoded JWT token. This avoids relying on client input.

## 15. How do you structure your routes and middleware?

**Answer:**

- `auth` middleware verifies JWT.
- `checkRole` middleware enforces RBAC.
- Routes are separated into modules: `user.router.js` for users, `product.router.js` for products.
- Server registers routes: `server.use('/users', userRouter)`, `server.use('/product', prodRouter)`.

## 16. How do you ensure passwords are safe?

**Answer:** Currently, passwords are stored in plain text as hashing is not implemented yet. In production, passwords should always be hashed (e.g., using bcrypt) before saving to the database.

## 17. How do you handle token expiration?

**Answer:** JWT is generated with an `expiresIn` option (e.g., 1 hour). After expiration, requests with the old token are rejected, and users need to log in again.

## 18. How does your protected route `/userDetail` work?

**Answer:** The route uses `auth` middleware. It returns user info from the decoded JWT. Optional: it can check that `req.params.id` matches `req.user.userId` to prevent accessing other users’ data.

## 19. Why do you use environment variables?

**Answer:** `.env` stores sensitive information like `PORT`, `MONGO_URI`, and `JWT_SECRET` to keep them out of source code and prevent leaks.

## 20. How do you handle invalid tokens?

**Answer:** `auth` middleware uses `jwt.verify()`. If verification fails, it returns `401 Unauthorized` and prevents access to protected routes.

## 21. How is your project scalable and interview-ready?

**Answer:**

- Stateless JWT auth allows multiple servers without session storage.
- Middleware modularity ensures easy addition of new routes and RBAC.
- MongoDB with Mongoose models enforces schema validation.
- Proper error handling and status codes make it production-friendly.

## 22. If asked about improvements, what would you say?

**Answer:**

- Hash passwords before saving
- Add refresh tokens for better session management
- Improve route naming to be fully RESTful
- Add update/delete routes for products with RBAC
- Add logging and monitoring for production

## 23. How would you explain your project to a non-technical interviewer?

**Answer:**

- Users can sign up and log in
- Admins can add products, normal users can view them
- System ensures only authorized users can perform certain actions
- It uses a secure token (JWT) to manage who can do what

---
