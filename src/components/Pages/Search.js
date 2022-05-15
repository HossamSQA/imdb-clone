// import { TextField } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { Alert, Button, Row, Tabs } from "react-bootstrap";
// import SearchIcon from "@mui/icons-material/Search";
// import { Tab } from "bootstrap";
// import axios from "axios";
// import CustomPagination from "../Customs/CustomPagination";
// import CustomCard from "../Customs/CustomCard";
// import { unavailable, unavailableLandscape } from "../unavailable_posters";

import { Alert } from "react-bootstrap";

const Search = () => {
  //   const [type, setType] = useState(0);
  //   const [searchText, setSearchText] = useState("");
  //   const [page, setPage] = useState(1);
  //   const [data, setData] = useState([]);
  //   const [allData, setAllData] = useState();

  //   const dataURL = `https://api.themoviedb.org/3/search/${
  //     type ? "tv" : "movie"
  //   }?api_key=ff467eb5250b9dbc204f57aa97463c7e&language=en-US&query=${searchText}&page=${page}&include_adult=false`;

  //   const fetchSearch = async () => {
  //     try {
  //       const { data } = await axios.get(dataURL);
  //       setData(data.results);
  //       setAllData(data.total_pages);
  //       // console.log(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   useEffect(() => {
  //     window.scroll(0, 0);
  //     fetchSearch();
  //     // eslint-disable-next-line
  //   }, [type, page]);

  return (
    <div>
      <Alert variant="warning">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Sorry, this page is still under construction. Please check back later.
        </p>
        <hr />
        <p className="mb-0">
          <span>If you have any questions, please contact me at </span>
          <a
            href="mailto:HossamMohamed1104@Gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Eng_Hossam_mohamed@hotmail.com
          </a>
        </p>
      </Alert>
    </div>
    // <div>
    //   <div className="d-flex justify-content-center align-items-center gap-5">
    //     <TextField
    //       id="filled-basic"
    //       label="Search"
    //       variant="filled"
    //       style={{ flex: 1 }}
    //       className="search_box"
    //       onChange={(e) => setSearchText(e.target.value)}
    //     />
    //     <Button className="btn-dark p-2">
    //       Search
    //       <SearchIcon className="ms-2" />
    //     </Button>
    //   </div>
    //   <div className="">
    //     <Tabs
    //       defaultActiveKey="profile"
    //       id="uncontrolled-tab-example"
    //       className="mb-3 d-flex justify-content-around align-items-center mt-4 "
    //       onChange={(event, newValue) => {
    //         setType(newValue);
    //         setPage(1);
    //       }}
    //     >
    //       <Tab eventKey="home" title="Search Movies"></Tab>
    //       <Tab eventKey="profile" title="Search TVSeries"></Tab>
    //     </Tabs>
    //   </div>

    //   <div className="d-flex gap-5 flex-wrap col align-items-center justify-content-center">
    //     {/* Mapping on results */}
    //     {data &&
    //       data.map((movie) => (
    //         <Row key={movie.id}>
    //           <CustomCard
    //             poster={
    //               movie.poster_path ? dataURL + movie.poster_path : unavailable
    //             }
    //             movieName={movie?.title || movie?.name || movie?.original_name}
    //             movieRelease={movie?.release_date || movie?.first_air_date}
    //             movieRate={movie.vote_average}
    //             movieDetails={movie.overview}
    //             movieVoteCount={movie.vote_count}
    //             movieLang={movie.original_language}
    //             movieType={movie.media_type}
    //             movieShot={
    //               movie.backdrop_path
    //                 ? dataURL + movie.backdrop_path
    //                 : unavailableLandscape
    //             }
    //             movieGenre={movie.genre_ids}
    //           />
    //         </Row>
    //       ))}
    //     {searchText &&
    //       !data &&
    //       (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
    //   </div>
    //   {allData > 1 && (
    //     <CustomPagination setPage={setPage} numOfPages={allData} />
    //   )}
    // </div>
  );
};

export default Search;
