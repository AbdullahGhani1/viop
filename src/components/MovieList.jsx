import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './MoviesTable';
class MovieList extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    getGenre: [],
  };

  componentDidMount() {
    const geners = [{ id: ' ', name: 'All Genre' }, ...getGenres()];

    this.setState({ movies: getMovies(), getGenre: geners });
  }
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
  handleGenre = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      getGenre,
      selectedGenre,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
    const movies = paginate(filtered, currentPage, pageSize);

    if (count === 0)
      return <h5>Showing {filtered.length} movies in the database.</h5>;

    return (
      <div className='row'>
        <div className='col-3'>
          <ListGroup
            items={getGenre}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenre}
          />
        </div>

        <div className='col'>
          <h5>Showing {filtered.length} movies in the database.</h5>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default MovieList;
