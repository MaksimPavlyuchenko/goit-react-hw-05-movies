import React from 'react';
import { useEffect, useState } from 'react';

import MovieList from 'components/MovieList/MovieList';
import { fetchMovie } from 'helpers';

import { HomeBox } from './Home.styled';

const Home = () => {
  const [state, setState] = useState([]);
  const endPointHome = 'trending/movie/day';

  useEffect(() => {
    const getMovie = async () => {
      const response = await fetchMovie(endPointHome);
      setState(response.data.results);
    };
    getMovie();
  }, []);
  return (
    <HomeBox>
      <MovieList stateArray={state} />
    </HomeBox>
  );
};

export default Home;
