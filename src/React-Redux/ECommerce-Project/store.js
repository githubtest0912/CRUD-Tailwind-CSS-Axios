import { createStore } from "redux";

import rootReducers from "./Redux/reducers";


const store = createStore(rootReducers);


export default store;