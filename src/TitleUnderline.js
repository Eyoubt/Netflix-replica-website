import React, { useState, useEffect } from "react";
import Axios from "axios";
import Row from "./Row";
function Row({ title }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(title);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
