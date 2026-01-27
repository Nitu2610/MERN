import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/fetchTodos";

export const ToDosList = () => {
  let dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.todo);
  // console.log(` component data- `, data);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) return <h1> Loading ....</h1>;
  if (error)
    return <h1> Error 404 : Unable to fetch the data ...., {error.message}</h1>;
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
                  border: "1px solid",
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center",
                  marginBottom: 10,
                }}
              >
                <p style={{ paddingLeft: 40 }}>
                  S No: <strong>{id}</strong>
                </p>
                <p>
                  Title: <strong>{title}</strong>
                </p>
                <p style={{ paddingRight: 40 }}>
                  Status:{" "}
                  <strong>{completed ? "Completed" : "Not Completed"}</strong>
                </p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
