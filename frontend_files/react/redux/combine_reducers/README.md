Redux Multiple Reducers Demo
    This project demonstrates a simple React + Redux application with multiple reducers. It includes a counter and a user profile management system, showing how to combine reducers and manage application state using Redux.

Table of Contents

    Project Overview
    Features
    Technologies Used
    Project Structure
    How to Run
    Common Mistakes & Fixes

Project Overview

    1.The app has two main functionalities:
        Counter Component
        Increment and decrement a number.

    2.Demonstrates simple state management with Redux.  
        User Profile Component
        View and update user information (name, email, age).
        Reset user information to initial state.
        Demonstrates Redux with an object state and payloads.

    The app uses React-Redux hooks:
        useSelector() → To read state from the Redux store.
        useDispatch() → To dispatch actions to the Redux store.

Features

    Counter with increment and decrement functionality.
    User profile form with live updates using Redux state.
    Reset button to restore initial user data.
    Multiple reducers combined using combineReducers.
    State management fully centralized in the Redux store.

Technologies Used

    React (v19)
    Redux (v5)
    React-Redux (v9)
    Vite (for fast development)
    JavaScript (ES6+)
    CSS (basic styling for components)

Project Structure
src/
│
├─ App.jsx             # Main app component with Redux Provider
├─ Counter.jsx         # Counter component
├─ UserProfile.jsx     # User profile component
├─ App.css             # Styles for the app
└─ main.jsx            # Entry point for Vite

How to Run

Install dependencies: npm install
Start development server: npm run dev
Open the app in the browser (Vite will provide the URL).

Common Mistakes & Fixes
1. Form value not updating correctly
    In the UserProfile component, the following code does not work:
    setFormData({...formData, [e.target.value]: e.target.value})
Problem:
    Using e.target.value as the key creates a property with the actual input value (like "John Doe") instead of the intended key ("name", "email", or "age").

        Fix:
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });

        e.target.name → refers to the input field (name, email, or age)
        e.target.value → the typed value in the input

    This ensures that the correct key in formData is updated.

2. Age input is a string

    HTML inputs always return a string.
    To store age as a number in Redux, convert it before dispatching:
        dispatch(updateUser(formData.name, formData.email, Number(formData.age)));

Summary

This project demonstrates a basic but complete Redux setup for multiple reducers in React, handling both primitive and object states. It also highlights common mistakes in form handling and updating Redux state.