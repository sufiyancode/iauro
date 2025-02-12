import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Settings from "./pages/Setting";
import Analytics from "./pages/Analytics";
import Product from "./pages/Products";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<User />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
