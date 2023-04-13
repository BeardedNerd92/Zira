import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Footer />
      </Router>
    </div>
  );
}
