import React, { useEffect, useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import Details from "../Details/Details";
import { unavailable } from "../config";
import CustomPagination from "../Pagination/CustomPagination";

const Movies = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [details, setDetails] = useState("");
  const [page, setPage] = useState(1);

  const URL = `https://api.themoviedb.org/3/discover/movie?api_key=ff467eb5250b9dbc204f57aa97463c7e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`;

  const dataURL = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data.results);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        setData([]);
      })
      .finally(() => setLoading(false));
  }, [URL]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const showDetails = () => {
    setDetails(true);
  };

  return (
    <div className="container">
      <div>{details ? <Details /> : null}</div>;
      <h1 className="page-title text-light text-center mb-4 mt-4 animate__rollIn">
        Movies
      </h1>
      <h5 className="mb-3 text-center text-dark info">
        Enjoy with an information for
        <span className="text-danger"> +12000</span> Movies
      </h5>
      {loading ? <div>Loading...</div> : null}
      {error ? (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      ) : null}
      <div className="d-flex gap-5 flex-wrap col align-items-center justify-content-center">
        {data &&
          data.map((movie) => (
            <Row key={movie.id}>
              <Card className="movie_card p-1 m-0 border-0" bg="dark">
                <Card.Img
                  variant="top"
                  src={
                    movie.poster_path
                      ? dataURL + movie.poster_path
                      : unavailable
                  }
                  className="rounded"
                />
                <Card.Body>
                  <Card.Title className="text-light fs-5 fw-bold">
                    {truncate(
                      movie?.title || movie?.name || movie?.original_name,
                      25
                    )}
                  </Card.Title>
                  <Card.Text className="text-danger fs-6">
                    <span className="text-primary">Release Date: </span>
                    {movie?.release_date || movie?.first_air_date}
                  </Card.Text>
                  <Card.Text>
                    {movie.vote_average > 5 ? (
                      <span className="rate text-light bg-success w-25 text-center">
                        {movie.vote_average}
                      </span>
                    ) : (
                      <span className="rate text-light bg-danger  w-25 text-center">
                        {movie.vote_average}
                      </span>
                    )}
                  </Card.Text>
                  <Card.Title className="text-light fs-6">
                    <span className="text-primary">Details: </span>
                    {truncate(movie.overview, 55)}
                  </Card.Title>
                  <Button
                    className="mb-2 btn btn-warning border-0 rounded-pill"
                    onClick={showDetails}
                  >
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Row>
          ))}
      </div>
      <div className="mt-4">
        <CustomPagination setPage={setPage} numOfPages={500} />
      </div>
    </div>
  );
};

export default Movies;