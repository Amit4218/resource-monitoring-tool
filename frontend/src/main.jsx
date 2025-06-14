import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/AuthContext.jsx";
import { Slide, ToastContainer } from "react-toastify";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <App />
        <ToastContainer
          theme="dark"
          autoClose={700}
          transition={Slide}
          position="bottom-right"
          closeOnClick={true}
          hideProgressBar={true}
        />
      </BrowserRouter>
    </UserContextProvider>
  </StrictMode>
);
