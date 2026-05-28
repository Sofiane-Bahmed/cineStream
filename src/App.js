import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import './App.css'

import searchIcon from './search.svg'
import MovieCard from './components/movieCard'
import Navbar from "./components/Navigation";
import Footer from "./components/footer/footer";
import MovieDetails from "./components/MovieDetails";
import {
    GlobalStyle,
    lightTheme,
    darkTheme
} from "./darkMode"
import { API_URL } from "./constants/index";


const Home = ({ movies, searchTerm, setSearchTerm, SearchMovie }) => (
    <div className="app">
        <h1>CineStream</h1>
        <div className="search">
            <input
                placeholder="search for movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        SearchMovie(searchTerm);
                    }
                }}
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
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
    </div>
);

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
            <Router>
                <GlobalStyle />
                <Navbar theme={theme} toggleTheme={toggleTheme} toggle={toggle} />
                <Routes>
                    <Route path="/" element={<Home movies={movies} searchTerm={searchTerm} setSearchTerm={setSearchTerm} SearchMovie={SearchMovie} />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                </Routes>
                <Footer />
            </Router>
        </ThemeProvider>
    );
};


export default App
