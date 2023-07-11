import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { fetchMovieId } from 'helpers';
import MovieBox from 'components/MovieBox/MovieBox';

import { StyledLink, BoxLink } from '../styles/MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [stateArray, setState] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const stopRef = useRef(backLinkHref);

  useEffect(() => {
    if (!movieId) return;
    const getMovieId = async () => {
      const result = await fetchMovieId(movieId);
      setState(result.data);
    };
    getMovieId();
  }, [movieId]);

  return (
    <>
      {movieId && (
        <>
          {stateArray.length !== 0 && <MovieBox state={stateArray} />}
          <BoxLink>
            <StyledLink to="cast">CAST</StyledLink>
            <StyledLink to="reviews">REVIEWS</StyledLink>
            <StyledLink to={stopRef.current}>GO BACK</StyledLink>
          </BoxLink>
        </>
      )}

      <Outlet />
    </>
  );
};

export default MovieDetails;
