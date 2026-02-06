## Express Request-Response Lifecycle & Middleware Notes

#### 1. Request & Response Objects

- For every HTTP request, Express automatically creates:
  - req → request object
  - res → response object
- These objects exist only for the lifetime of that request.
- After res.send()/res.json(), the request ends and objects are destroyed (garbage collected).

---

#### 2. Request Object (req)

- Purpose: carry data through middleware and routes.
- Already contains:
  - req.headers → request headers
  - req.method → GET, POST, etc.
  - req.url → full URL
  - req.query → query parameters (?key=value)
  - req.params → route parameters (/user/:id)
  - req.body → parsed body (after body-parser)
- Developer responsibility: attach extra properties for later use, e.g. req.user = decoded.

---

#### 3. Response Object (res)

- Purpose: send data back to the client.
- Characteristics:
  - Once a response is sent (res.json() / res.send()), the request ends.
  - Middleware and subsequent routes are skipped if response is sent early.
- Rule: Do not attach data to res for sharing between middleware.

---

#### 4. Middleware Flow

- Express passes the same req object by reference through each middleware.
- Order matters: `middleware1 → middleware2 → route handler`
- Middleware can:
  - read from req
  - add new properties to req
  - call next() to continue
- Middleware should not send the final response unless handling errors.

---

#### 5. Data Sharing with req

- Use req as a shared notebook:
  - Middleware 1: req.user = decodedToken
  - Middleware 2 / Route: req.user is accessible
- Why req?
  - It persists through the request lifecycle.
  - Each request gets its own object, so no clashes between users.
- Do not use res to pass data forward.

---

#### 6. Lifecycle Overview (Simple Process)

1. Client sends request → Express creates req & res.
2. Middleware reads req, adds data (like req.user).
3. Middleware calls next() → request continues.
4. Route handler reads req and uses res to send response.
5. Response sent → request ends → req & res destroyed.

---

#### 7. Key Interview Points

- `req = carrier / shared notebook`
- res = final reply / ends request
- next() = allows request to move forward
- Each request has its own req & res → thread-safe
- Do not send response in middleware unless it’s an error.
- Adding to req is how data is passed forward between middleware.

---

#### 8. Memory & Safety Notes

- req and res are temporary objects in RAM.
- After res.send(), objects are released → no memory leak.
- Middleware cannot affect other users’ requests.

---

#### 9. Thunder Client / Client-Side {} Clarification

- {} sent in the client body → goes to req.body.
- It has nothing to do with function syntax: `(req, res, next) => { }`
- Always separate client-side request body vs server function body.

---

#### 10. Status codes

- Unauthorized / forbidden operations → used 500 instead of 403

---

#### 11. createdBy field

- Currently expected in request body
- Better: auto-set from logged-in JWT user (req.user.userId)

---

#### 12. Route naming

- `/allprod` → should ideally be / (GET /product)
- `/add-product` → should ideally be POST /product

---

#### 13. Populate reference

- Currently createdBy is just userId
- Optional: .populate("createdBy", "name email") for clarity

---

### 14. Error messages

- Some messages have typos / grammar (“Ther user”)
- Better to standardize for readability

---

#### 15. Middleware consistency

- checkRole returns 500 on unauthorized → should be 403
- Always use try/catch only around async operations, not basic role checks

---

#### 16. Golden Mental Model

`“req is the carrier; res is the reply; middleware prepares the request; route sends the response.”`

--- 

#### 17. `Model.findByIdAndUpdate(id, { ...updateDetail }, { new: true, runValidators: true }, );`
    id,        // 1️⃣ Which document?
    update,    // 2️⃣ What fields to change?
    options    // 3️⃣ How to behave? (return new, validate)

---

