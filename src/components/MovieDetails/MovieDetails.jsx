import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import fetchMovieId from 'helpers/fetchMovieID';
import MovieBox from 'components/MovieBox/MovieBox';

import { StyledLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [stateArray, setState] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (movieId) {
      fetchMovieId(movieId).then(result => setState(result.data));
    }
  }, [movieId]);

  return (
    <>
      {movieId && (
        <>
          <Link to={backLinkHref}>GO BACK</Link>

          {stateArray.length !== 0 && <MovieBox state={stateArray} />}
          <StyledLink to="cast">CAST</StyledLink>
          <StyledLink to="reviews">REVIEWS</StyledLink>
        </>
      )}

      <Outlet />
    </>
  );
};

export default MovieDetails;
