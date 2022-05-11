import React from "react";
import { Button, Card } from "react-bootstrap";
import Trending from "../Trending/Trending";

const Details = (props) => {
  const data = this.props.location;
  return (
    <div className="container movie_data text-dark">
      <Card className="text-center">
        <Card.Header>Movie Details</Card.Header>
        <Card.Body>
          <Card.Title>{props.data.movie.title}</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default Details;
