import axios from "axios";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";


axios.defaults.baseURL = "http://127.0.1:4000"
axios.defaults.withCredentials = true;

function App() {



  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
