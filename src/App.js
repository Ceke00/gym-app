import Home from "./pages/Home";
//import About from "./components/About";
//import VideoList from "./components/VideoList";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import "./custom.scss";
import "./App.css";
//import videoData from "./data/videos.json";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
//import ScrollToTop from "./components/ScrollToTop";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <NavBar />

    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
        </Routes>
        <Footer />

    </Router>
  );
}

export default App;
