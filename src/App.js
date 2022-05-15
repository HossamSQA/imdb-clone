import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation/Navigation";
import Landing from "./components/Landing/Landing";
import Trending from "./components/Pages/Trending";
import Movies from "./components/Pages/Movies";
import Series from "./components/Pages/Series";
import Search from "./components/Pages/Search";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Container className="mt-5 p-5 text-light container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Trending" element={<Trending />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Series" element={<Series />} />
            <Route path="/Search" element={<Search />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;
