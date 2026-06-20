# Axios App

A simple React application built with **Vite** that demonstrates how to fetch data from an external API using **Axios**, manage loading and error states, and display the fetched data in a list.

## Features

* Fetches user data from the JSONPlaceholder API using Axios.
* Displays a loading indicator while the data is being fetched.
* Handles API errors gracefully.
* Renders a list of usernames after a successful fetch.
* Uses React Hooks (`useState` and `useEffect`) for state management and side effects.
* Demonstrates component-based architecture.

## Technologies Used

* React
* Vite
* Axios
* JavaScript (ES6+)

## Project Structure

```
src/
│── App.jsx
│── UserList.jsx
│── DisplayUser.jsx
│── Loading.jsx
│── Error.jsx
│── App.css
│── assets/
```

## Components

### App

The root component responsible for:

* Managing application state.
* Maintaining:

  * `loading`
  * `error`
  * `users`
* Rendering the appropriate UI based on the current state.

### UserList

Responsible for:

* Fetching user data from the API.
* Updating the users state.
* Handling loading and error states.
* Passing fetched data to the `DisplayUser` component.

The API endpoint used:

```
https://jsonplaceholder.typicode.com/users
```

A 3-second delay is introduced using `setTimeout` to simulate a loading state.

### DisplayUser

Displays:

* A heading
* An unordered list of usernames

Uses the `map()` method to render each user with a unique `key`.

Example output:

```
List of Usernames:

- Bret
- Antonette
- Samantha
- Karianne
...
```

### Loading

Displays:

```
Loading...
```

while the API request is in progress.

### Error

Displays an error message when the API request fails.

Example:

```
Error: Unable to fetch the users.
```

along with the error returned by Axios.

## State Management

The application maintains three pieces of state:

```javascript
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const [users, setUsers] = useState([]);
```

| State     | Purpose                                           |
| --------- | ------------------------------------------------- |
| `loading` | Indicates whether data is currently being fetched |
| `error`   | Stores any API error message                      |
| `users`   | Stores the fetched list of users                  |

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Learning Objectives

This project demonstrates:

* Using Axios for HTTP requests.
* Working with `useEffect` for side effects.
* Managing state with `useState`.
* Conditional rendering in React.
* Rendering lists using `map()`.
* Handling asynchronous operations with `async/await`.
* Error handling using `try`, `catch`, and `finally`.
* Passing data between parent and child components using props.

## Possible Improvements

* Add a retry button when the API request fails.
* Display additional user information such as email and company.
* Add a search bar to filter users.
* Implement pagination.
* Replace the artificial `setTimeout` delay with a real loading spinner based solely on the API request.
* Add unit tests using React Testing Library.
* Add TypeScript support.
* Style the application using Tailwind CSS or Material UI.

## License

This project is intended for learning and educational purposes.
