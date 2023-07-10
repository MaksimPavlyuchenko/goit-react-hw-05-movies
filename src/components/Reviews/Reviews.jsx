import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieDescription } from 'helpers';

const Reviews = () => {
  const { movieId } = useParams();
  const [state, setState] = useState([]);
  const description = 'reviews';

  useEffect(() => {
    if (!movieId) return;
    const getMovieDescription = async () => {
      const result = await fetchMovieDescription(movieId, description);
      setState(result.data.results);
    };
    getMovieDescription();
  }, [movieId]);

  return (
    <ul>
      {state.length !== 0
        ? state.map(({ author, content, id }) => {
            return (
              <li key={id}>
                AUTHOR: {author}
                <p>{content}</p>
              </li>
            );
          })
        : `SORRY,BRO!!!(((But we don't have yet any reviews for this movie`}
    </ul>
  );
};

export default Reviews;
