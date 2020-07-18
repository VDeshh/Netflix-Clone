import React, { useState, useEffect } from 'react';
import axios from './axios'

function row({ title, fetchUrl }) {

    const { movies, setMovies } = useState([]);

    useEffect(() => {
        // if [], run once when the row loads, and don't run it again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            return request;
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>{title}</h2>

            {/* Container -> Posters */}
        </div>
    )
}

export default row
