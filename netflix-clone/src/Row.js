import React, { useState } from 'react'

function row({ title }) {

    const { movies, setMovies } = useState([]);
    

    return (
        <div>
            <h2>{title}</h2>

            {/* Container -> Posters */}
        </div>
    )
}

export default row
