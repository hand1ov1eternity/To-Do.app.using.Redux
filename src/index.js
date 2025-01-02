import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import todos from "./reducers";
import App from "./App";
import { addTodo, toggleTodo, editTodo, deleteTodo } from "./actions";

const store = configureStore({
  reducer: todos,
});

store.dispatch(addTodo("Dispatch my first action"));
console.log("State after adding first todo", store.getState());
store.dispatch(addTodo("Go out for 2 hours"));
console.log("State after adding second todo", store.getState());
store.dispatch(addTodo("Stay out for 2 hours"));
console.log("State after adding third todo", store.getState());
const action = deleteTodo(2);
console.log("Dispatching action:", action);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
