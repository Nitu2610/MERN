import { createStore } from "redux";
import { countReducer } from "./countReducer";

export const store=createStore(countReducer)