
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import Header from './components/Header';


function App() {
  return (
    <div >
     
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/movies' element={<Movies/>}/>
    <Route path='/movies/:id' element={<MovieDetail/>}/>
    


    </Routes>
    </div>
  );
}

export default App;
