import React from 'react';

import {
  MovieBoxStyled,
  Title,
  ImageBox,
  Paragrafe,
  DescriptionBox,
} from './MovieBox.styled';

const MovieBox = ({ state }) => {
  const genres = state.genres.flatMap(genre => genre.name);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <MovieBoxStyled>
      <ImageBox
        src={
          state.poster_path
            ? `https://image.tmdb.org/t/p/w500/${state.poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <DescriptionBox>
        <Title>
          {state.title} ({state.release_date})
        </Title>
        <p>User scores: {(state.vote_average * 10).toFixed(0)}%</p>
        <Paragrafe>OVERVIEW</Paragrafe>
        <span>{state.overview}</span>
        <Paragrafe>GENRES</Paragrafe>
        <span>{genres.join(' ')}</span>
      </DescriptionBox>
    </MovieBoxStyled>
  );
};

export default MovieBox;
