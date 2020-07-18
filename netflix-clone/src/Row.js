import React, { useState, useEffect } from 'react';
import axios from './axios';

function Row({ title, fetchUrl }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // if [], run once when the row loads, and don't run it again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {/*several row posters */}
                {movies.map(movie => (
                    <img src={movie.poster_path} alt={movie.name} />
                ))}
            </div>
 
        </div>
    );
}

export default Row;