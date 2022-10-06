import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import "mdb-react-ui-kit/dist/css/mdb.min.css"
import App from "./App";
import { Provider } from "react-redux";
// import store from './React-Redux/ECommerce-Project/store'
import store from './Redux-Thunk/store'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./01-Authentication-React/client/Context/AuthProvider";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
   
    <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
      <App />
      </AuthProvider>
    
    </Provider>
    </BrowserRouter>
   
    
  </StrictMode>
);
