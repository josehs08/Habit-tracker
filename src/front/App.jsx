import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

import Home from "./Home.jsx";
import HabitCard from "./components/HabitCard.jsx";
import Navbar from "./components/Navbar.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/habit' element={<HabitCard />} />
    </Routes>
  </BrowserRouter>
);
