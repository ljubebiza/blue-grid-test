// import logo from './images/logo.png';
import React from "react";
import "./styles/main.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<AboutUs />} path="/about-us" exact />
          <Route element={<Contact />} path="/contact" exact />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
