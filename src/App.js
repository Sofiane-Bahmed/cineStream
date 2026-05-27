import React from "react";
import { useState, useEffect } from "react";
import './App.css'
import searchIcon from './search.svg'
import MovieCard from './movieCard'
import Navbar from "./components/Navigation";
import Footer from "./components/footer/footer";
import { GlobalStyle, lightTheme, darkTheme } from "./darkMode"
import { ThemeProvider } from 'styled-components';


const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7'
// const movie = {
//     "Title": "Superman Returns",
//     "Year": "2006",
//     "imdbID": "tt0348150",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
// }

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [theme, setTheme] = useState('light')
    const [toggle, setToggle] = useState(false)

    const SearchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search)

    }
    useEffect(() => {
        SearchMovie('avengers');
    }, [])

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            setToggle(true);
        } else {
            setTheme('light');
            setToggle(false);
        }
    };

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyle />
                <Navbar theme={theme} toggleTheme={toggleTheme} toggle={toggle} />
                
                <div className="app">
                    <h1 >CineStream</h1>
                    <div className="search">
                        <input
                            placeholder="search for movies"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <img
                            src={searchIcon}
                            alt="search"
                            onClick={() => SearchMovie(searchTerm)}
                        />
                    </div>

                    {
                        movies?.length > 0
                            ? (
                                <div className="container">
                                    {movies.map((movie) => (
                                        <MovieCard movie={movie} />
                                    ))}
                                </div>
                            ) : (
                                <div className="empty">
                                    <h2>No movies found</h2>
                                </div>
                            )}
                </div>
                <Footer />
            </>
        </ThemeProvider>
    );
};


export default App 