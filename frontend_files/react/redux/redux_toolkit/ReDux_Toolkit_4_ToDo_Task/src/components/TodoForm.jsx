import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoTask } from "../redux/todoSlice";
import { addTodoThunk } from "../redux/actions";

export const TodoForm = () => {
  const [userTodo, setUserTodo]= useState({title:"",status:""});
    let data=useSelector((state)=>state.todo.data);
    console.log(data.length);
    let dispatch=useDispatch()

  function handleChange(e){
    const {name,value}= e.target;
    setUserTodo((prev)=> ({...prev, [name]:value}))
  }

  function handleSubmit(e){
    e.preventDefault();
    let {title, status}=userTodo;
    let newTask={
      userId:Date.now(),
      id:data.length+1,
      title,
      completed: status === "Completed" ? true :false, // or  completed: status === "Completed" // the comparison will  returns a boolean, you can just re- write.
    };
   //  let newTodoData= [...data,addTodoTask]; // Either I can create a new copy of the array with user added todo task or just send the task obj and in the reducer it will directly add to the state array. 
   // console.log(addTodoTask)
   // dispatch(addTodoTask(newTask));
    dispatch(addTodoThunk(newTask));
 //    console.log(` the user todo is `, userTodo);
    setUserTodo({title:"",status:" "});
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter the todo title" name="title" value={userTodo.title} onChange={handleChange}/>

      <select name="status" onChange={handleChange} value={userTodo.status} >
        <option value="" >Select the task status</option>
        <option value="Completed"> Completed</option>
        <option value="Not Completed"> Not Completed</option>
      </select>

      <input type="submit" value="Submit" />
    </form>
    </>
  );
};
