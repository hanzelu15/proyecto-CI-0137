import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from './store/store'
import { Provider } from 'react-redux'
import "./index.css";

import { AppRouter } from "./Routes/AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
    <div className=" bg-silver">
        <AppRouter/>
    </div>
    </BrowserRouter>
  </Provider>
);
