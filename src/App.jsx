import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import "./App.css";
import Features from "./components/features";
import Logos from "./components/Logos";
import Products from "./components/Products";
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShoppingCart";

import { Route, Router, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          exact
          path='/eCommerse'
          element={
            <React.Fragment>
              <Hero />
              <Features />
              <Logos />
              <Products />
            </React.Fragment>
          }
        />
        <Route exact path='/ShoppingCart' element={<ShoppingCart />} />
        <Route exact path='/Login' element={<LogIn />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
