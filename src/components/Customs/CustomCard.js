import React from "react";
import { Button, Card } from "react-bootstrap";
import MyVerticallyCenteredModal from "./ContentModal";

const CustomCard = ({
  poster,
  movieShot,
  movieName,
  movieRelease,
  movieRate,
  movieDetails,
  movieVoteCount,
  movieLang,
  movieType,
  movieGenre,
}) => {
  const [modalShow, setModalShow] = React.useState(false);

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

        {/* Modal Button */}
        <Button
          variant="primary"
          onClick={() => setModalShow(true)}
          className="btn-warning mt-4"
        >
          Show Details
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          movieShot={movieShot}
          movieName={movieName}
          movieRelease={movieRelease}
          movieRate={movieRate}
          movieDetails={movieDetails}
          movieVoteCount={movieVoteCount}
          movieLang={movieLang}
          movieType={movieType}
          movieGenre={movieGenre}
        />
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
