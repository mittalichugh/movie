import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./movieDetails.css";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [videoKey, setVideoKey] = useState("");

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => {
                setMovie(data);
            })
            .catch(error => console.error("Error fetching movie details:", error));

        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => {
                if (data.results.length > 0) {
                    setVideoKey(data.results[0].key);
                }
            })
            .catch(error => console.error("Error fetching movie videos:", error));
    }, [id]);

    const handleAddToWatchlist = () => {
        alert("Movie added to watchlist!");
    }

    return (
        <div className="movie-details">
            {movie && (
                <>
                    {videoKey && (
                        <iframe
                            width="100%"
                            height="300px"
                            src={`https://www.youtube.com/embed/${videoKey}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="video"
                        ></iframe>
                    )}
                    <button className="watchlist-button" onClick={handleAddToWatchlist}>
                        Add to Watchlist
                    </button>
                </>
            )}
        </div>
    );
}

export default MovieDetails;
