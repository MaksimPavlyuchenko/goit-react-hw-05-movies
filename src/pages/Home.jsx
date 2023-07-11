import React from 'react';
import { useEffect, useState } from 'react';

import MovieList from 'components/MovieList/MovieList';
import { fetchMovie } from 'helpers';

import { HomeBox } from '../styles/Home.styled';

const Home = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const response = await fetchMovie();
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
