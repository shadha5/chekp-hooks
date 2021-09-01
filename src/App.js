
import { useState } from 'react';
import './App.css';
import AddMovie from './component/AddMovie';
import MovieList from './component/MovieList';
import Search from './component/Search';
import { moviesData } from './Data';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Descreptions from './component/Descreptions';





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
      <Router>  
      <Search
       searchvalue={ searchvalue}
       handlesearch={handlesearch}
      searchrate={ searchrate}
      handlerate={ handlerate}/>
      <switch>
      <Route exact path="/descreption/:name" render= {(props) => <Descreptions {...props} movies={movies}/>} />
      <Route exact path="/" render={() =>  <MovieList films= {movies.filter(
        (movie) => movie.name.toLowerCase() 
      .includes(
        searchvalue.toLowerCase().trim()
      )&&
        movie.rating>=searchrate
      ) 
      } /> 
      } />
     
      </switch>
    <AddMovie handleadd= {handleadd } />
    </Router>
    </div>
  );
}

export default App;
