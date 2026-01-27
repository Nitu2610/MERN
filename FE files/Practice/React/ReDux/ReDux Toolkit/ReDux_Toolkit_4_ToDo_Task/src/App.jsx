import "./App.css";
import { TodoForm } from "./components/todoForm";
import { ToDosList } from "./components/ToDosList";



const App = () => {
  return (
<>
<h1>To Do Tasks</h1>
<TodoForm/>
<ToDosList />
{ /**  <ToDosList /> */}
</>
  );
};

export default App;
