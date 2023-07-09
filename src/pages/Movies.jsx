import React, { useEffect, useState } from 'react';

import MovieDetails from 'components/MovieDetails/MovieDetails';
import SearchForm from 'components/SearchForm/SearchForm';
import SearchMovieList from 'components/SearchMovieList/SearchMovieList';
import { MoviesStyled } from './Movie.styled';
import searchFetch from 'helpers/fetchSearchMovie';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [stateArray, setState] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  useEffect(() => {
    searchFetch(query).then(data => setState(data.data.results));
  }, [query]);
  const handleSubmit = value => {
    setSearchParams({ query: value });
  };
  return (
    <MoviesStyled>
      <SearchForm onSubmit={handleSubmit} />
      {stateArray.length !== 0 && <SearchMovieList stateArray={stateArray} />}
      <MovieDetails />
    </MoviesStyled>
  );
};

export default Movies;
