import React from "react";
import { Link } from "react-router-dom";

const Descreptions = ({movies, match}) => {
  return (
    <div>
      {movies
        .filter((movie)=> movie.name === match.params.name)
        .map((el, i) => (
          <div key={i} className="movie-card">
            <h1> {el.name} </h1>
            <p> {el.Desc} </p>
            <iframe
              width="560"
              height="315"
              src={el.trailer}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe> 

            <Link to="/">
              <button className="btn btn-primary">go back</button>
            </Link>
          </div>
        ))}  
    </div>
  );
};

export default Descreptions;
