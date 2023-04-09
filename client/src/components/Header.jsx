import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Issues from "../Pages/Issues";
import Home from "../Pages/Home";
import Dashboard from "../Pages/DashBoard";
import Projects from "../Pages/Projects";
import Users from "../Pages/Users";
import Settings from "../Pages/Settings";

export default function Header() {
  return (
    <header>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/issues' element={<Issues />} />
          <Route path='/users' element={<Users />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </Router>
    </header>
  );
}