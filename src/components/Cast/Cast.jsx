import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieDescription } from 'helpers';
import {
  ActorBox,
  ActorItem,
  StyledImg,
  ParagrafeAs,
  ParagrafeName,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [state, setState] = useState([]);
  const description = 'credits';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!movieId) return;
    const getMovieDescription = async () => {
      const result = await fetchMovieDescription(movieId, description);
      setState(result.data.cast);
    };
    getMovieDescription();
  }, [movieId]);

  return (
    <ActorBox>
      {state.length !== 0 &&
        state.map(({ id, profile_path, character, original_name }) => {
          return (
            <ActorItem key={id}>
              <StyledImg
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defaultImg
                }
                alt={character}
                width={100}
              />
              <ParagrafeName>{original_name}</ParagrafeName>
              <ParagrafeAs>As: {character}</ParagrafeAs>
            </ActorItem>
          );
        })}
    </ActorBox>
  );
};

export default Cast;
