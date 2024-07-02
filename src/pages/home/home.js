import React, { useEffect, useState } from 'react';
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
            .catch(error => console.error("Error fetching popular movies:", error));
    }, []);

    return (
        <>
            <div className='poster'>
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={2}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {popularMovies.map(movie => (
                        <Link key={movie.id} style={{ textDecoration: "none", color: "white" }} to={`/movies/${movie.id}`}>
                            <div className='posterImage'>
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt={movie.original_title} />
                            </div>
                            <div className='posterImage_overlay'></div>
                            <div className='posterImage_description'>{movie ? movie.overview : ""}</div>
                        </Link>
                    ))}
                </Carousel>
            </div>
        </>
    );
}

export default Home;
