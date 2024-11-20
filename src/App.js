import Home from "./pages/Home";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/Signup"; 
import BecomeMember from "./pages/BecomeMember";
import UserPage from "./pages/UserPage";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./custom.scss";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
       <ScrollToTop /> 
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/becomemember" element={<BecomeMember />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
