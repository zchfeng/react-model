import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { StoreProvider } from './hooks/use-store';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from './store/index';

const rootStore = createStore();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StoreProvider value={rootStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StoreProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
