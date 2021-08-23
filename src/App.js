
import { useState } from 'react';
import './App.css';
import MovieList from './component/MovieList';
import Search from './component/Search';
import { moviesData } from './Data';

function App() {
  const [movies, setMovies] = useState(moviesData)
  return (
    <div >
      <Search/>
      <MovieList films= {movies} />
    
    </div>
  );
}

export default App;
