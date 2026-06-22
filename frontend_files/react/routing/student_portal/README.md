# Student Portal Routing App

## Overview

A React application built to practice and demonstrate React Router concepts including:

* Layout Routes
* Nested Routes
* Protected Routes
* Dynamic Routes
* Programmatic Navigation
* Route Parameters
* Active Navigation Links
* Catch-All Routes (404 Page)

This project was created as part of a React Router learning journey.

---

## Features

### Layout Route

A shared layout is used for public pages.

Shared UI:

* Navbar
* Footer

Pages using the layout:

* Home (`/`)
* Courses (`/courses`)

---

### Navigation

Implemented using `NavLink`.

Available routes:

* Home
* Courses
* Student Dashboard

Active routes are highlighted using conditional CSS classes.

---

### Login System

A simple login/logout simulation using React state.

Features:

* Toggle login status
* Programmatic navigation using `useNavigate`

---

### Protected Routes

Protected pages require authentication.

Protected routes:

* `/student-dashboard`
* `/student-dashboard/profile`
* `/student-dashboard/results`
* `/student-dashboard/attendance`

If the user is not authenticated, access is restricted.

---

### Nested Routes

The Student Dashboard contains nested routes.

Routes:

```text
/student-dashboard
├── profile
├── results
└── attendance
```

`Outlet` is used to render the active child route.

---

### Dynamic Routes

Student details are displayed using route parameters.

Route:

```text
/student/:id
```

Examples:

```text
/student/101
/student/102
/student/103
```

The parameter is accessed using:

```jsx
const { id } = useParams();
```

---

### 404 Page

Unknown URLs are handled using a catch-all route.

Example:

```text
/random-page
```

Displays:

```text
404 - Page Not Found
```

---

## Technologies Used

* React
* React Router DOM
* Chakra UI
* JavaScript (ES6+)

---

## Project Structure

```text
src
│
├── Components
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProtectedRoute.jsx
│   └── AppRouting.jsx
│
├── Pages
│   ├── Home.jsx
│   ├── Courses.jsx
│   ├── Login.jsx
│   ├── StudentDashboard.jsx
│   ├── Profile.jsx
│   ├── Results.jsx
│   ├── Attendance.jsx
│   ├── StudentDetails.jsx
│   └── NotFound.jsx
│
└── App.jsx
```

---

## Routing Structure

```text
/
├── Home

/courses
├── Courses

/login
├── Login

/student-dashboard
├── Student Dashboard
│
├── /student-dashboard/profile
│   └── Profile
│
├── /student-dashboard/results
│   └── Results
│
└── /student-dashboard/attendance
    └── Attendance

/student/:id
└── Student Details

*
└── Not Found
```

---

## Concepts Practiced

### React Router

* BrowserRouter
* Routes
* Route
* Outlet
* Navigate
* Link
* NavLink
* useNavigate
* useParams

### Routing Patterns

* Layout Routes
* Nested Routes
* Protected Routes
* Dynamic Routes
* Route Guards

### React Concepts

* Props
* State
* Conditional Rendering
* Component Composition

---

## Learning Outcomes

After completing this project, I gained practical experience with:

* Creating multi-page React applications
* Building protected routes
* Implementing nested routing
* Working with route parameters
* Programmatic navigation
* Structuring reusable layouts
* Managing authentication state for route protection

---

## Future Improvements

* Replace mock authentication with JWT authentication
* Add Context API for global auth state
* Add API integration
* Add role-based route protection
* Improve UI styling
* Add loading and error states

---

## Author

Built as a React Router practice project to strengthen routing fundamentals and prepare for React/MERN Stack interviews.
