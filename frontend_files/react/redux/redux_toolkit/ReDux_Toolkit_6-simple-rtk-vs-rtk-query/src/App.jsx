import { Provider } from "react-redux";
import "./App.css";
import { RTKQuery } from "./components/RTKQuery";
import { SimpleRTK } from "./components/SimpleRTK";
import { store } from "./RTK/simple/store";
import { rtkStore } from "./RTK/rtk/store";

const App = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Provider store={store}>
        <SimpleRTK/>
        </Provider>
        <Provider store={rtkStore}>
          <RTKQuery />
        </Provider>
      </div>
    </>
  );
};

export default App;
