import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import Layout from "./Pages/Layout";
import CartPage from "./Pages/CartPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Route>
    </Routes>
  );
};

export default App;
