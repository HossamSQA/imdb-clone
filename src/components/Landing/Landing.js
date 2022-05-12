import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="container mt-5 text-dark text-center">
      <div>
        <h1 className="fw-bold mb-5 title animate__hinge">
          <span className="text-warning">IMDB</span>
        </h1>
        <div>
          <p className="fs-4 mt-5">
            <span className="text-warning">IMDb</span> is an online database of
            information related to <span className="text-danger">films</span>,
            <span className="text-danger"> television series</span>,
            <span className="text-danger"> home videos</span>,
            <span className="text-danger"> video games</span>, and
            <span className="text-danger"> streaming contents</span>.
          </p>

          <p className="fs-4 mt-5">
            As of <span className="text-primary">February 2022</span>, the
            database contained some 8.7 million titles (including television
            episodes) and <span className="text-success"> 11.4 million</span>{" "}
            person records. Additionally, the site had
            <span className="text-success"> 83 million</span> registered users.
            The site's well-used message boards were disabled in
            <span className="text-primary"> February 2017</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
