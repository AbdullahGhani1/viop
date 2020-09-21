import React from 'react';
import Like from './common/like';

const MoviesTable = ({ movies, onLike, onDelete }) => {
  const tbHead = ['Title', 'Genre', 'Stock', 'Rate', 'Like', ''];

  return (
    <table className='table'>
      <thead>
        <tr>
          {tbHead.map((th) => (
            <th scope='col' key={th}>
              {th}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td scope='row'>{movie.title}</td>
            <td scope='row'>{movie.genre.name}</td>
            <td scope='row'>{movie.numberInStock}</td>
            <td scope='row'>{movie.dailyRentalRate}</td>
            <td scope='row'>
              <Like liked={movie.liked} onClick={() => onLike(movie)} />
            </td>
            <td scope='row'>
              <button
                onClick={() => onDelete(movie)}
                className='btn btn-danger btn-sm'
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
