# Redux Thunk Todo App

A simple Todo application demonstrating **Redux Toolkit** with **Thunks** for async operations, including CRUD functionality and UI state management.

---

## **Features**

- Fetch todos from [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos)
- Add new todos
- Delete existing todos
- Toggle completion status
- Edit todo titles inline
- Loading and error handling
- Conditional rendering for inline editing

---

## **Tech Stack**

- React 18+
- Redux Toolkit
- Redux Thunk (`createAsyncThunk`)
- Axios for API requests
- JSONPlaceholder API for mock data

---

### **Setup / Installation**

1. Clone the repository:

    ```bash
    git clone <repo-url>

2.  Install dependencies and Start the development server:

        npm install -> npm start
---

### **Folder Structure**
src/
 ├─ redux/
 │   ├─ actions.js        # Async thunks for CRUD operations
 │   ├─ todoSlice.js      # Redux slice (reducers + extraReducers)
 ├─ components/
 │   ├─ ToDosList.jsx     # Todo list + edit UI
 ├─ App.jsx
 └─ index.js

---
### **Notes / Best Practices**

- Immer: Redux Toolkit allows direct mutation in reducers (todo.completed = true) safely.
- Thunks: All async operations (fetchTodos, addTodoThunk, deleteTodoThunk, toggleStatusTodoThunk, editedTodoThunk) handled via createAsyncThunk.
- Local component state: Temporary UI states like editing title are handled with useState.
- Unique identifiers: Always use id to identify todos in updates/deletes; do not rely on title.
- Conditional rendering: Inline editing uses `editingTodo?.id === id` to switch between `<p> and <input>.`
- Error handling: Use pending and rejected states to manage loading/error feedback.
- DRY principle: Repeated logic (like setting loading and error) can be moved to helper functions for cleaner code.

---
### **Usage**

- Click Edit to modify a todo title inline.
- Click Save to update both Redux store and API.
- Click Delete to remove a todo.
- Click Mark as Completed / Not Completed to toggle status.
- UI automatically re-renders on any changes.
---

