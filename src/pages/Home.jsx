import React from 'react';

import { HomeBox } from './Home.styled';
import MovieList from 'components/MovieList/MovieList';
import fetchMovie from 'helpers/fetchMovie';
import { useEffect, useState } from 'react';

const Home = () => {
  const [state, setState] = useState([]);
  const endPointHome = '/trending/movie/day';

  useEffect(() => {
    fetchMovie(endPointHome).then(response => {
      setState(response.data.results);
    });
  }, []);
  return (
    <HomeBox>
      <MovieList stateArray={state} />
    </HomeBox>
  );
};

export default Home;
