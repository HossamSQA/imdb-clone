import React from "react";
import { BrowserRouter } from "react-router-dom";
import Toolbar from "./components/ToolBar/Toolbar";
import BG from "../src/assets/background.jpg";

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
        <p className="mt-5 p-5 text-light">Main Page</p>
      </div>
    </BrowserRouter>
  );
};

export default App;
