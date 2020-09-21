import React, { Component } from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';
class MoviesTable extends Component {
  render() {
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props;
    const tbHead = [
      { path: 'title', label: 'Title' },
      { path: 'genre.name', label: 'Genre' },
      { path: 'numberInStock', label: 'Stock' },
      { path: 'dailyRentalRate', label: 'Rate' },
      { key: 'like' },
      { key: 'delete' },
    ];

    return (
      <table className='table'>
        <TableHeader columns={tbHead} sortColumn={sortColumn} onSort={onSort} />
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
  }
}

export default MoviesTable;
