/**
 * Uncomment if you want save the store in localstorage
 */
// import { applyMiddleware, createStore } from "redux";
// import reducer from "./reducer.js";
// import { save, load, clear } from "redux-localstorage-simple";
// const createStoreWithMiddleware = applyMiddleware(save())(createStore);

// const store = createStoreWithMiddleware(
//   reducer,
//   //load(),
//   clear(),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

/**
 * Comment if you want save the store in localstorage
 */
import { createStore } from "redux";
import reducer from "./reducer.js";

const store = createStore(reducer);

export default store;
