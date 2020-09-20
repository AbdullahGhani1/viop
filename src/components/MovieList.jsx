import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './pagination';
import { paginate } from '../utils/paginate';
class MovieList extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
  };
  handleLike = (movie) => {
    // console.log('onClicked', movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const tbHead = ['Title', 'Genre', 'Stock', 'Rate', 'Like', ''];
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;
    const movies = paginate(allMovies, currentPage, pageSize);
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
            {movies.map((td) => (
              <tr key={td._id}>
                <td scope='row'>{td.title}</td>
                <td scope='row'>{td.genre.name}</td>
                <td scope='row'>{td.numberInStock}</td>
                <td scope='row'>{td.dailyRentalRate}</td>
                <td scope='row'>
                  <Like liked={td.liked} onClick={() => this.handleLike(td)} />
                </td>
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
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default MovieList;
