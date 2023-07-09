import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieDescription from 'helpers/fetchMovieDescription';

const Reviews = () => {
  const { movieId } = useParams();
  const [state, setState] = useState([]);
  const description = 'reviews';

  useEffect(() => {
    if (!movieId) return;
    fetchMovieDescription(movieId, description).then(result =>
      setState(result.data.results)
    );
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
