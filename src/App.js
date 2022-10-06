import React from "react";
import "./styles/App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" caseSensitive={true} element={<Auth />} />
          <Route path="signup" caseSensitive={true} element={<SignUp />} />
          <Route
            path="resetpassword"
            caseSensitive={true}
            element={<ResetPassword />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
