import React from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';

//css
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({ movies: movies, isLoading: false })
  }
  componentDidMount() {
    this.getMovies();

  }

  render() {
    //var declarations
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {/* ternary operator to check if data is loading */}
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>) :
          // ternary operator else part
          (
            <div className="movies">
              {movies.map(movie => {
                return <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres} />
              })}
            </div>
          )}
      </section>
    );
  }
}

export default App;
