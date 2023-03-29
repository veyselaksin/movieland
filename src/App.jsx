import { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

const API_URL = 'https://www.omdbapi.com/?apikey=6bbf6deb'

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const searchMovies = async title => {
        const response = await fetch(`${API_URL}&s=${title}`)
            .then(response => response.json())
            .then(data => setMovies(data.Search))
    }
    useEffect(() => {
        searchMovies('superman')
    }, [])

    console.log(movies)
    return (
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input
                    type='text'
                    className='searchBox'
                    placeholder='Search for a movie...'
                    value={searchValue}
                    onChange={e => {
                        setSearchValue(e.target.value)
                    }}
                />
                <img src={SearchIcon} className='searchIcon' alt='search-icon' onClick={() => searchMovies(searchValue)} />
            </div>
            {movies !== undefined ? (
                <div className='container'>
                    {movies.map(movie => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className='container'>
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    )
}

export default App
