import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Toolbar from "./components/ToolBar/Toolbar";
import { Container } from "react-bootstrap";
import Landing from "./components/Pages/Landing/Landing";
import Trending from "./components/Pages/Trending/Trending";
import Movies from "./components/Pages/Movies/Movies";
import Series from "./components//Pages/Series/Series";
// import Search from "./components/Search/Search";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Toolbar />
        <Container className="mt-5 p-5 text-light container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Trending" element={<Trending />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Series" element={<Series />} />
            {/* <Route path="/" component={Search} />  */}
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;
