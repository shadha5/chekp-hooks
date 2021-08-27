import React from 'react'
import StarRating from './StarRating'

const MovieCard = ({card}) => {
    return (
        <div className= "movie-card" >
            <StarRating rate= {card.rating} />
           <img src= {card.image}  alt= "" />
            <h1> {card.name} </h1>
            <p> {card.date} </p>
        </div>
    )
}

export default MovieCard
