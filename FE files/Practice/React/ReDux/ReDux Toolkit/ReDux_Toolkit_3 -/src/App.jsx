import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";

/**1st Step , create the initial state. */
const initialState = {
  name: "John Doe",
  email: "john@example.com",
  age: 25,
};

/**2nd Step, create the slice */
const userSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const { name, email, age } = action.payload;
      state.name = name;
      state.age = age;
      state.email = email;
    },
    resetUser: () => initialState,
  },
});
/** 3rd Step destructure the action which will be used in dispatch to update the state. */
const { updateUser, resetUser } = userSlicer.actions;

/** 4th Step get reducer fn from the userSlicer.reducer */
const userReducer = userSlicer.reducer;

/** 5th step, create the store and link reducer to it. */
const userStore = configureStore({
  reducer: userReducer,
});

// 6. React Component
const UserProfile = () => {
  // Get state from Redux store
  const user = useSelector((state) => state);
  // Get dispatch function
  const dispatch = useDispatch();

  // Local state for form
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    age: user.age,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        name: formData.name,
        email: formData.email,
        age: Number(formData.age),
      })
    );
  };

  return (
    <div className="container">
      <h2>User Profile Management</h2>

      {/* Current User Info */}
      <div className="user-info">
        <h3>Current User Info:</h3>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
      </div>

      {/* Update Form */}
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

        <button type="submit">Update User</button>
        <button
          type="button"
          onClick={() => dispatch(resetUser())}
          style={{ marginLeft: "10px", backgroundColor: "#f44336" }}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={userStore}>
      <UserProfile />
    </Provider>
  );
};

export default App;
