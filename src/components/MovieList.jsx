import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class MovieList extends Component {
  state = {
    movies: getMovies(),
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  render() {
    const tbHead = ['Title', 'Genre', 'Stock', 'Rate', ''];

    const { length: count } = this.state.movies;
    if (count === 0) return <h5>Showing {count} movies in the database.</h5>;

    return (
      <React.Fragment>
        <h5>Showing {count} movies in the database.</h5>
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
            {this.state.movies.map((td) => (
              <tr key={td._id}>
                <td scope='row'>{td.title}</td>
                <td scope='row'>{td.genre.name}</td>
                <td scope='row'>{td.numberInStock}</td>
                <td scope='row'>{td.dailyRentalRate}</td>
                <td scope='row'>
                  <button
                    onClick={() => this.handleDelete(td)}
                    className='btn btn-danger btn-sm'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default MovieList;
