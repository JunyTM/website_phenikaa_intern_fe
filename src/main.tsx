import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./routers/Router";
import { store } from "./redux/Store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Router />
    <ToastContainer />
  </Provider>
);
