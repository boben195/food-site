import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Card from "./pages/Card/Card";
import Checkouts from "./pages/Checkouts/Checkouts";
import Order from "./pages/Order/Order";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/card" element={<Card />} />
        <Route path="/checkout" element={<Checkouts />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
