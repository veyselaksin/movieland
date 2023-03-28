import { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

const API_URL = 'https://www.omdbapi.com/?apikey=6bbf6deb'

const movie1 = {
    Title: 'Batman Begins',
    Year: '2005',
    imdbID: 'tt0372784',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTMwNjQ0NjQxN15BMl5BanBnXkFtZTcwMjQ5NjQzNw@@._V1_SX300.jpg'
}

const App = () => {
    const [movies, setMovies] = useState([])
    const searchMovies = async title => {
        const response = await fetch(`${API_URL}&s=${title}`)
            .then(response => response.json())
            .then(data => console.log(data))
    }
    useEffect(() => {
        searchMovies('batman')
    }, [])

    console.log(movies)
    return (
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input type='text' className='searchBox' placeholder='Search for a movie...' value='Batman' onChange={() => {}} />
                <img src={SearchIcon} className='searchIcon' alt='search-icon' onClick={() => {}} />
            </div>

            <div className='container'>
                <MovieCard movie={movie1} />
            </div>
        </div>
    )
}

export default App
