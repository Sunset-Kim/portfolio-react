import React from "react";
import { BrowserRouter, Route, RouteProps, Routes } from "react-router-dom"
import Home from "./screen/Home";

interface ThemeProps {
  onChangeTheme: () => void
}

const Router:React.FC<RouteProps & ThemeProps> = ({onChangeTheme}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home onChangeTheme={onChangeTheme}/>} />
        <Route path="/project" element={<Home onChangeTheme={onChangeTheme}/>} />
        <Route path="/toy" element={<Home onChangeTheme={onChangeTheme}/>} />
      </Routes>
    </BrowserRouter>
  )

}

export default Router