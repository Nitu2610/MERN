import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { UserList } from "./components/UserList";
import { fetchUser } from "./redux/fetchUser";
import { AppRoutes } from "./routes/AppRoutes";

const App = () => {
  const dispatch = useDispatch();
  const { loading,error } = useSelector((state) => state.user);

  const handleRetry = () => {
    dispatch(fetchUser());
    console.log("clicked");
  };

  return (
    <>
      <h1> Redux ToolKit</h1>
      {error && <button onClick={handleRetry} disabled={loading}>
        Retry to Fetch User Details
      </button>}
     <AppRoutes/>
    </>
  );
};

export default App;
