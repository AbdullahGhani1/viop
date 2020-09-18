import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList';
class App extends Component {
  render() {
    return (
      <main role='main' className='container'>
        <h1>Viop</h1>
        <MovieList />
      </main>
    );
  }
}
export default App;
