
import { useState } from 'react';
import './App.css';
import AddMovie from './component/AddMovie';
import MovieList from './component/MovieList';
import Search from './component/Search';
import { moviesData } from './Data';



function App() {
  const [movies, setMovies] = useState(moviesData)
  const [searchvalue, setSearchvalue] = useState(" ")
  const [searchrate, setSearchrate] = useState(1)
  const handleadd= (newmovie) => {
    setMovies([...movies,newmovie])
  }
  const handlesearch=(e) => { 
    setSearchvalue(e.target.value)
  }
  const handlerate=(newrate)=> {
    setSearchrate(newrate)

  }
  return (
    <div >
      <Search
       searchvalue={ searchvalue}
       handlesearch={handlesearch}
      searchrate={ searchrate}
      handlerate={ handlerate}/>
      <MovieList films= {movies.filter(
        (movie) => movie.name.toLowerCase() 
      .includes(
        searchvalue.toLowerCase().trim()
      )&&
        movie.rating>=searchrate
      ) 
      } />
    <AddMovie handleadd= {handleadd } />
    </div>
  );
}

export default App;
