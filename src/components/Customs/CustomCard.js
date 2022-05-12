import React from "react";
import { Button, Card } from "react-bootstrap";

const CustomCard = ({
  poster,
  movieName,
  movieRelease,
  movieRate,
  movieDetails,
}) => {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <Card className="movie_card p-1 m-0 border-0 rounded" bg="dark">
      <Card.Img variant="top" src={poster} className="rounded" />
      <Card.Body>
        <Card.Title className="text-light fs-5 fw-bold">
          {truncate(movieName, 25)}
        </Card.Title>
        <Card.Text className="text-danger fs-6">
          <span className="text-primary">Release Date: </span>
          {movieRelease}
        </Card.Text>
        <Card.Text>
          {movieRate > 5 ? (
            <span className="rate text-light bg-success w-25 text-center">
              {movieRate}
            </span>
          ) : (
            <span className="rate text-light bg-danger  w-25 text-center">
              {movieRate}
            </span>
          )}
        </Card.Text>
        <Card.Title className="text-light fs-6">
          <span className="text-primary">Details: </span>
          {truncate(movieDetails, 55)}
        </Card.Title>
        <Button className="mb-2 btn btn-warning border-0 rounded-pill">
          Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
