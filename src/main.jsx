import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./Redux/store.js";
import { Provider } from "react-redux";
import MyContext from './context/userContext.js';
const userName = 'Mishab'; 
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <MyContext.Provider value={userName}>


      <React.StrictMode>
        <App />
      </React.StrictMode>
</MyContext.Provider>

    </PersistGate>
  </Provider>
);
