import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screen/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Home />} />
        <Route path="/toy" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )

}

export default Router