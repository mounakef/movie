import React from 'react'

const MovieCard = ({item}) => {

    
    return (
        <div>
            <img src={item.image} />
            <h1> {item.name}</h1>
            <h2> {item.date}</h2>
            <h2> {item.type}</h2>
            <p> {item.description}</p>
            <h1>{item.FilterRating}</h1>
        </div>
    )
}

export default MovieCard
