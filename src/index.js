import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import App from "./App";
import { Provider } from "react-redux";
import store from './React-Redux/ECommerce-Project/store'
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
   
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
   
    
  </StrictMode>
);
