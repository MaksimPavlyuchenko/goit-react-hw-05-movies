import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails/MovieDetails';
import SearchForm from 'components/SearchForm/SearchForm';
import SearchMovieList from 'components/SearchMovieList/SearchMovieList';
import { searchFetch } from 'helpers';

import { MoviesStyled } from './Movie.styled';

const Movies = () => {
  const [stateArray, setState] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    const getSearchFetch = async () => {
      const data = await searchFetch(query);
      setState(data.data.results);
    };
    getSearchFetch();
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
