import React, { useEffect, useState } from 'react'
import './MovieList.css'
import axios from 'axios';

function MovieList() {
    const [data, setData] = useState([])
    const baseurl = "http://localhost:8000/api"
    const token = 'FSMovies2023';
    
    const fetchData = async () => {
        try {
            const response = await axios.get(`${baseurl}/movies`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className="movie-list-container">
            {data.map(category => (
                <div key={category.category} className="category-container">
                    <h2 className="category-title">{category.category}</h2>
                    <div className="poster-container">
                        {category.movies.map(movie => (
                            <div key={movie.title} className="movie-poster">
                                <img src={movie.poster} alt={movie.title} className="poster-image" />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieList