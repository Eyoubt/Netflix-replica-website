import React, { useState, useEffect } from "react";
import "./Row.css";
import Axios from "axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/w500/";
function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    // fetch(fetchUrl)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setMovies(data.results);
    //   });
    async function fetchData() {
      const request = await Axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
          {movies.map((movie) => {
            let img1 = movie.poster_path;
            let img2 = movie.backdrop_path;
            let image = ((isLargeRow && img1) || (!isLargeRow && img2)) && (
              <img
                onClick={() => handleClick(movie)}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={`${base_url}${isLargeRow ? img1 : img2}`}
                alt={movie.name}
              />
            );

            return image;
          })}
        </div>
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
