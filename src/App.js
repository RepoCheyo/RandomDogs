import React from "react";
import { useEffect, useState } from "react";
import "./styles/App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { auth } from "./FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import Auth from "./pages/Auth";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" caseSensitive={true} element={<Auth />} />
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
