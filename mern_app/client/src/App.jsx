import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";

function App() {



  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
