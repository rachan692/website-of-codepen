import { createStore } from "redux";
import myreducer from "./reducers";

// Create the Redux store
const store = createStore(
  myreducer, // Your reducer
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Enable Redux DevTools extension
);

export default store;
