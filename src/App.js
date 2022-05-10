import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Toolbar from "./components/ToolBar/Toolbar";
import BG from "../src/assets/background.jpg";
import { Container } from "react-bootstrap";
import Landing from "./components/Pages/Landing/Landing";
import Trending from "./components/Pages/Trending/Trending";
// import Movies from "./components/Movies/Movies";
// import Series from "./components/Series/Series";
// import Search from "./components/Search/Search";

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="app"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Toolbar />
        <Container className="mt-5 p-5 text-light container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Trending" element={<Trending />} />
            {/* <Route path="/" component={Movies} />
            <Route path="/" component={Series} />
            <Route path="/" component={Search} /> */}
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;
