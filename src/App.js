
import { useState } from 'react';
import './App.css';
import AddMovie from './component/AddMovie';
import MovieList from './component/MovieList';
import Search from './component/Search';
import { moviesData } from './Data';



function App() {
  const [movies, setMovies] = useState(moviesData)
  return (
    <div >
      <Search/>
      <MovieList films= {movies} />
    <AddMovie/>
    </div>
  );
}

export default App;
