# User Management Form (useReducer)

A simple React application built using **useReducer** and **Chakra UI** to practice state management.

## Features

- Add users
- Delete users
- Reset form
- Display all users
- Manage state using useReducer

---

## State Structure

```javascript
{
  name: "",
  email: "",
  loading: false,
  error: null,
  users: []
}
```

---

## Actions Implemented

### UPDATE__NAME

Updates the name field.

```javascript
dispatch({
  type: "UPDATE__NAME",
  payload: e.target.value,
});
```

### UPDATE__EMAIL

Updates the email field.

```javascript
dispatch({
  type: "UPDATE__EMAIL",
  payload: e.target.value,
});
```

### ADD_USER

Adds a new user to the users array.

```javascript
dispatch({
  type: "ADD_USER",
  payload: {
    name: state.name,
    email: state.email,
  },
});
```

### DELETE_USER

Removes a user based on the provided name.

```javascript
dispatch({
  type: "DELETE_USER",
  payload: state.name,
});
```

### RESET_USER

Resets the form and application state to the initial state.

```javascript
dispatch({
  type: "RESET_USER",
  payload: initialState,
});
```

---

## Reducer Logic

The reducer handles all state updates using a switch statement.

Example:

```javascript
case "ADD_USER":
  return {
    ...state,
    users: [...state.users, action.payload],
    name: "",
    email: "",
  };
```

---

## What I Learned

- Managing complex state with useReducer
- Dispatching actions with payloads
- Updating state immutably
- Working with arrays inside reducers
- Using the spread operator for state updates
- Rendering dynamic lists in React
- Integrating Chakra UI components

---

## Common Mistake I Fixed

Initially I tried:

```javascript
state.users.push(action.payload);
```

This mutates the existing state directly, which should be avoided in reducers.

Correct approach:

```javascript
users: [...state.users, action.payload];
```

This creates a new array and keeps state updates immutable.

---

## Technologies Used

- React
- useReducer Hook
- Chakra UI
- JavaScript (ES6+)

---

## Future Improvements

- Form validation
- Delete users by ID
- Edit user details
- Persist users using Local Storage
- Display user email in the list
- Use loading and error states for async operations