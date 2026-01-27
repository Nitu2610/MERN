import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodoThunk,
  editedTodoThunk,
  fetchTodos,
  toggleStatusTodoThunk,
} from "../redux/actions";
import { deleteTodoTask, handleStatusToggle } from "../redux/todoSlice";

export const ToDosList = () => {
  const [editingTodo, setEditingTodo] = useState(null); // stores the todo being edited
  const [editingTitle, setEditingTitle] = useState(""); // stores the temporary title

  let dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.todo);
  // console.log(` component data- `, data);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) return <h1> Loading ....</h1>;
  if (error)
    return <h1> Error 404 : Unable to fetch the data ...., {error}</h1>;

  function handleEdit(todo) {
    setEditingTodo(todo);
    setEditingTitle(todo.title);
  }

  function handleSave(id) {
    dispatch(editedTodoThunk({ id, title: editingTitle }));
    setEditingTodo(null); // stop editing
    setEditingTitle(""); // reset input
  }

  return (
    <>
      <div id="Outer-Container">
        {data.length <= 0 ? (
          <h2>The todo tasks are empty</h2>
        ) : (
          data.map((item, i) => {
            let { userId, id, title, completed } = item;
            return (
              <div
                key={i}
                style={{
                  boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center",
                  marginBottom: 10,
                }}
              >
                <p style={{ paddingLeft: 40 }}>
                  S No: <strong>{id}</strong>
                </p>

                {editingTodo?.id === id ? ( // only when handleEdit button is clicked state -editingTodo will get id from the captured todo details or else it will be undefined and conditional rendering is false.
                  <input
                    type="text"
                    value={editingTitle}
                    onChange={(e) => setEditingTitle(e.target.value)}
                  />
                ) : (
                  <p>
                    Title: <strong>{title}</strong>
                  </p>
                )}

                <p
                  style={{
                    paddingRight: 40,
                    textDecoration: completed ? "line-through" : "none",
                  }}
                >
                  Status:{" "}
                  <strong>{completed ? "Completed" : "Not Completed"}</strong>
                </p>

                <div id="edit&delete&completionBtn">
                  {editingTodo?.id === id ? (
                    <button onClick={() => handleSave(id)}>Save</button>
                  ) : (
                    <button onClick={() => handleEdit(todo)}>Edit</button> // we send the entire tod details
                  )}
                  <button onClick={() => dispatch(deleteTodoThunk(id))}>
                    Delete
                  </button>{" "}
                  {/** takind the title because its unique, comparing to the userId */}
                  <button
                    onClick={() =>
                      dispatch(
                        toggleStatusTodoThunk({ id, completed: !completed }),
                      )
                    }
                  >{`Mark as ${completed ? "Not Completed" : "Completed"}`}</button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
