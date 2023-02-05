import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../axios';
import requests from '../request';


const Banner = () => {
    const [movie, setMovie] = useState([]);
  
    useEffect(() => {
      async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals);
        // console.log(request.data.results)
        const response = request.data.results
        const randomNumber = Math.floor(Math.random() * response.length - 1)
        setMovie(response[randomNumber])
        // console.log(response[randomNumber])
        // console.log(randomNumber)
        return request
      }

      fetchData()
    }, [])

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) + "..." : string
    }
  return (
    <div className='banner' style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}")`

    }}>
        <div className="banner__contents">
            <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner-buttons">
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>{truncate(movie?.overview, 150)}</h1>
        </div>
         <div className="banner--fadebutton"/> 
    </div>
   
  )
}

export default Banner;    