import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import "./Trending.css";

const Trending = (props) => {
  const URL =
    "https://api.themoviedb.org/3/trending/all/week?api_key=ff467eb5250b9dbc204f57aa97463c7e";

  const dataURL = "https://image.tmdb.org/t/p/w500/";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="container">
      <h1 className="page-title text-dark text-center mb-4 mt-4 animate__rollIn">
        Trending Now
      </h1>
      {loading ? <div>Loading...</div> : null}
      {error ? (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      ) : null}
      <div className="d-flex gap-5 flex-wrap col">
        {data &&
          data.map((movie) => (
            <Row key={movie.id}>
              <Card className="movie_card p-1">
                <Card.Img
                  variant="top"
                  src={dataURL + movie.poster_path}
                  className="rounded"
                />
                <Card.Body>
                  <Card.Title className="text-dark">
                    {truncate(
                      movie?.title || movie?.name || movie?.original_name,
                      25
                    )}
                  </Card.Title>
                  <Card.Text className="text-danger fs-5">
                    <span className="text-primary">Release Date: </span>
                    {movie?.release_date || movie?.first_air_date}
                  </Card.Text>
                  <Card.Text>
                    {movie.vote_average > 5 ? (
                      <span className="rate text-success">
                        {movie.vote_average}
                      </span>
                    ) : (
                      <span className="rate text-danger">
                        {movie.vote_average}
                      </span>
                    )}
                  </Card.Text>
                  <Card.Title className="text-dark fs-5">
                    <span className="text-primary">Type: </span>
                    {movie.media_type}
                  </Card.Title>
                  <Button className="mb-2 btn btn-warning">Details</Button>
                </Card.Body>
              </Card>
            </Row>
          ))}
      </div>
    </div>
  );
};

export default Trending;
