import { useEffect, useState } from 'react';
import './Row.css'
import axios from '../axios';


const Row = ({title, fetchURL, isLargeRow = false}) => {
    
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function getMovies(){
            const request = await axios.get(fetchURL)
            const response = request.data.results
            // const response = request.data.results;
            setMovies(response)
            return request
        }
        getMovies()
    },[fetchURL])
    console.log(title, movies)
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                    <img className={`row__poster ${isLargeRow  && "row__posterLarge"}`} key={movie.id}
                    src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>            
        </div>
    )
}
export default Row;