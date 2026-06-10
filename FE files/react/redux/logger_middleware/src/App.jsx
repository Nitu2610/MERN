// App.jsx
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import "./App.css";
import logger, { createLogger } from "redux-logger";

// 1. Action Types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const Update_User = "Update_User";
const Reset_User = "Reset_User";

// 2. Action Creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const updateUser = (name, email, age) => ({
  type: Update_User,
  payload: { name, email, age },
});
const resetuser = () => ({ type: Reset_User });

// 3. Initial States
const initialUserState = {
  name: "John Doe",
  email: "john@example.com",
  age: 25,
};

// 4. Reducers
const counterReducer = (currentState = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return currentState + 1;
    case DECREMENT:
      return currentState - 1;
    default:
      return currentState;
  }
};

const userReducer = (currentState = initialUserState, action) => {
  switch (action.type) {
    case Update_User:
      return {
        ...currentState,
        ...action.payload,
      };
    case Reset_User:
      return initialUserState;
    default:
      return currentState;
  }
};

// 5. Combine Reducers & Create Store
const rootReducer = combineReducers({
  count: counterReducer,
  user: userReducer,
});

const logDetails=createLogger({
  collapsed: true, //Collapsed log group by default
  diff:true, // show state difference
})

const reduxStore = createStore(rootReducer, applyMiddleware(logDetails));

// 6. Counter Component
const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="section">
      <h2>Counter</h2>
      <div className="info-display">
        <h3>Count: {count}</h3>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button className="counter-btn" onClick={() => dispatch(increment())}>
          Increment (+)
        </button>
        <button className="counter-btn" onClick={() => dispatch(decrement())}>
          Decrement (-)
        </button>
      </div>
    </div>
  );
};

// 7. UserProfile Component
const UserProfile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    age: user.age,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Need to work on the forms with this logic
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(formData.name, formData.email, formData.age));
  };

  return (
    <div className="section">
      <h2>User Profile</h2>

      <div className="info-display">
        <h3>Current User Info:</h3>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="primary-btn">
          Update User
        </button>
        <button
          type="button"
          className="secondary-btn"
          onClick={() => dispatch(resetuser())}
        >
          Reset User
        </button>
      </form>
    </div>
  );
};

// 8. App Component
const App = () => {
  return (
    <Provider store={reduxStore}>
      <div className="app-container">
        {/* Render your components here */}
        <h1>Redux Multiple Reducers Demo</h1>
        <Counter />
        <UserProfile />
      </div>
    </Provider>
  );
};

export default App;
