import { Chip } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=ff467eb5250b9dbc204f57aa97463c7e&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({}); // unmounting
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className=" mt-2 mb-3 d-flex flex-wrap justify-content-center gap-2">
      {selectedGenres.map((genre) => (
        <Chip
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}

      {genres.map((genre) => (
        <Chip
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;

// import React, { useEffect } from "react";
// import Chip from "@mui/material/Chip";

// const Genres = ({
//   selectedGenres,
//   setSelectedGenres,
//   genres,
//   setGenres,
//   setPage,
//   type,
// }) => {
//   const genreURL = `https://api.themoviedb.org/3/genre/${type}/list?api_key=ff467eb5250b9dbc204f57aa97463c7e&language=en-US`;

//   useEffect(() => {
//     fetch(genreURL)
//       .then((res) => res.json())
//       .then((data) => {
//         setGenres(data.genres);
//       });
//     return () => {
//       setGenres({});
//     };
//   });

//   const handleAdd = (genre) => {
//     setSelectedGenres([...selectedGenres, genre]);
//     setGenres(genres.filter((g) => g.id !== genre.id));
//     setPage(1);
//   };

//   const handleRemove = (genre) => {
//     setSelectedGenres(selectedGenres.filter((g) => g.id !== genre.id));
//     setGenres([...genres, genre]);
//     setPage(1);
//   };

//   return (
//     <div className="chips mt-2 mb-3 d-flex flex-wrap justify-content-center gap-2">
//       {selectedGenres.map((genre) => (
//         <Chip
//           label={genre.name}
//           key={genre.id}
//           clickable3
//           size="small"
//           color="primary"
//           onClick={() => handleRemove(genre)}
//         />
//       ))}

//       {genres.map((genre) => (
//         <Chip
//           label={genre.name}
//           key={genre.id}
//           clickable
//           size="small"
//           onClick={() => handleAdd(genre)}
//         />
//       ))}
//     </div>
//   );
// };

// export default Genres;
