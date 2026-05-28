import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { API_URL } from "../constants/index";

const DetailsContainer = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 80vh;
  gap: 2rem;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    padding: 2rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Poster = styled.img`
  width: 300px;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.5);
`;

const InfoSection = styled.div`
  flex: 1;
  max-width: 600px;
  color: ${({ theme }) => theme.text};
  font-family: var(--font-raleway);

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-family: var(--font-roboto);
    color: ${({ theme }) => theme.movieTitle};
  }

  p {
    margin-bottom: 0.8rem;
    line-height: 1.6;
    font-size: 1.1rem;
  }

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.movieTitle};
    margin-right: 0.5rem;
  }
`;

const BackButton = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 2rem;
  background: ${({ theme }) => theme.movieTitle};
  color: ${({ theme }) => theme.body};
  font-family: var(--font-raleway);
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  border: none;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      const response = await fetch(`${API_URL}&i=${id}`);
      const data = await response.json();
      setMovie(data);
      setLoading(false);
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div className="app"><h2>Loading...</h2></div>;
  if (!movie || movie.Response === 'False') return <div className="app"><h2>Movie not found</h2></div>;

  return (
    <div className="app">
      <div style={{ width: '100%', maxWidth: '1000px' }}>
        <BackButton onClick={() => navigate(-1)}>Go Back</BackButton>
        <DetailsContainer>
          <Poster src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
          <InfoSection>
            <h2>{movie.Title}</h2>
            <p><span>Year:</span> {movie.Year}</p>
            <p><span>Rated:</span> {movie.Rated}</p>
            <p><span>Released:</span> {movie.Released}</p>
            <p><span>Runtime:</span> {movie.Runtime}</p>
            <p><span>Genre:</span> {movie.Genre}</p>
            <p><span>Director:</span> {movie.Director}</p>
            <p><span>Actors:</span> {movie.Actors}</p>
            <p><span>Plot:</span> {movie.Plot}</p>
            <p><span>Awards:</span> {movie.Awards}</p>
            <p><span>IMDB Rating:</span> {movie.imdbRating}</p>
          </InfoSection>
        </DetailsContainer>
      </div>
    </div>
  );
};

export default MovieDetails;
