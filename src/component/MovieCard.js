import React from 'react'

const MovieCard = ({card}) => {
    return (
        <div className= "movie-card" >
            <p>rate</p>
           <img src= {card.image}  alt= "" />
            <h1> {card.name} </h1>
            <p> {card.date} </p>
        </div>
    )
}

export default MovieCard
