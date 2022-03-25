import './App.css';
import Search from './components/search/index';
import Button from './components/button/index';
import { ImageProps, gif } from './components/image';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Input'>
          <Search />
          <Button />
        </div>
        <ImageProps image={gif.url} alt={gif.title} />
      </header>
    </div>
  );
};

export default App;
