import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { unavailable, unavailableLandscape } from "../unavailable_posters";
import CustomCard from "../Customs/CustomCard";
import "../Customs/CustomCard.css";
import CustomPagination from "../Customs/CustomPagination";
import "./Pages.css";

const Trending = () => {
  const [allData, setAllData] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  // API Link
  const URL = `https://api.themoviedb.org/3/trending/all/day?api_key=ff467eb5250b9dbc204f57aa97463c7e&page=${page}`;

  // Data Link
  const dataURL = "https://image.tmdb.org/t/p/w500/";

  // fetching Data
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
        setAllData(data);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [URL, page]);

  return (
    <div className="container">
      <h1 className="page-title text-light text-center mb-4 mt-4 animate__rollIn fs-sm-6">
        Trending Now
      </h1>
      <h5 className="mb-3 text-center text-dark info">
        Enjoy with an information for
        <span className="text-danger"> +{allData.total_results}</span> Movies &
        TV Series
      </h5>

      {loading ? <div className="text-dark">Loading...</div> : null}
      {error ? (
        <div className="text-dark">{`There is a problem fetching the post data - ${error}`}</div>
      ) : null}

      <div className="d-flex gap-5 flex-wrap col align-items-center justify-content-center">
        {/* Mapping on results */}
        {data &&
          data.map((movie) => (
            <Row key={movie.id}>
              <CustomCard
                poster={
                  movie.poster_path ? dataURL + movie.poster_path : unavailable
                }
                movieName={movie?.title || movie?.name || movie?.original_name}
                movieRelease={movie?.release_date || movie?.first_air_date}
                movieRate={movie.vote_average}
                movieDetails={movie.overview}
                movieVoteCount={movie.vote_count}
                movieLang={movie.original_language}
                movieType={movie.media_type}
                movieShot={
                  movie.backdrop_path
                    ? dataURL + movie.backdrop_path
                    : unavailableLandscape
                }
                movieGenre={movie.genre_ids}
              />
            </Row>
          ))}
      </div>
      <div className="mt-4">
        <CustomPagination setPage={setPage} numOfPages={allData.total_pages} />
      </div>
    </div>
  );
};

export default Trending;
