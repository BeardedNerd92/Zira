import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Issues from "../Pages/Issues";
import Dashboard from "../Pages/DashBoard";
import Projects from "../Pages/Projects";
import Users from "../Pages/Users";
import Settings from "../Pages/Settings";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function Header() {
  return (
    <header>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/issues' element={<Issues />} />
        <Route path='/users' element={<Users />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </header>
  );
}
