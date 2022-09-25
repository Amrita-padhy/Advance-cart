import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./componts/Header";
import Home from "./componts/Home";
import Cart from "./componts/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* <Route path="/header" element={}></Route> */}{" "}
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
