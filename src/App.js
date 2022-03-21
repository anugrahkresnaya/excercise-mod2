import './App.css';
import Search from './components/Search';
import Button from './components/Button';

function App() {

  const img = <img src='https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif' alt="gif" />

  return (
    <div className="App">
      <header className="App-header">
        <div className='Input'>
          <Search />
          <Button />
        </div>
        {img}
        
      </header>
    </div>
  );
}

export default App;
