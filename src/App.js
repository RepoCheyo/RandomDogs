import React from "react";
import { useEffect, useState } from "react";
import "./styles/App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { auth } from "./FirebaseConfig";
import Auth from "./pages/Auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Auth />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
