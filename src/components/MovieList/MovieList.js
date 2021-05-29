import React from 'react'
import MovieCard from './MovieCard/MovieCard.js'
const MovieList = ({moviesData}) => {
    return (
        <div>
           { moviesData.map((item)=> 
           <MovieCard item= {item } key={item.id}/>)}
        </div>
    )
}

export default MovieList
