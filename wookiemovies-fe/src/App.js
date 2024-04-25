import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;
