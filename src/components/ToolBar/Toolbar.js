import React from "react";
import "./Toolbar.css";
import HdIcon from "@mui/icons-material/Hd";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Nav, Navbar } from "react-bootstrap";

const Toolbar = () => {
  return (
    <Navbar
      bg="dark"
      expand="lg"
      variant="dark"
      fixed="top"
      className="toolbar"
    >
      <Container fluid>
        <Navbar.Brand href="/" className=" d-flex align-items-center gap-2">
          <HdIcon className="fs-1 text-warning" />
          <h1 className="fw-bold mt-1">IMDB Clone</h1>
        </Navbar.Brand>

        <div className="spacer"></div>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-lg-0 my-2 toolbar_items gap-3"
            style={{ maxHeight: "50%" }}
            navbarScroll
          >
            <Nav.Link href="/Trending" className="toolbar_ico">
              <WhatshotIcon className="fs-2 mb-1 text-warning" />
              <h6>Trending Now</h6>
            </Nav.Link>

            <Nav.Link href="/Movies" className="toolbar_ico">
              <MovieCreationIcon className="fs-2 mb-1 text-warning" />
              <h6>Movies</h6>
            </Nav.Link>

            <Nav.Link href="/Series" className="toolbar_ico">
              <LiveTvIcon className="fs-2 mb-2 text-warning" />
              <h6>TV Series</h6>
            </Nav.Link>

            <Nav.Link href="/Search" className="toolbar_ico">
              <SearchIcon className="fs-2 mb-1 text-warning" />
              <h6>Search</h6>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Toolbar;
