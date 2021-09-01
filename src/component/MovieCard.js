import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'

const MovieCard = ({card}) => {
    return (
        <div className= "movie-card" >
            <StarRating rate= {card.rating} />
           <img src= {card.image}  alt= "" />
            <h1> {card.name} </h1>
            <p> {card.date} </p>
            <Link to= {`/descreption/${card.name}`}> <button className="btn btn-primary" >see descreption</button>
            </Link>
        </div>
    );
}

export default MovieCard
