import './App.css';
import Search from './components/search/index';
import Button from './components/button/index';
import { ImageProps } from './components/image';
import data from './components/gif/data';

function App() {

  const renderGifs = () => data.filter((d) => d.rating === 'g')
  .map((d) => <ImageProps image={d.url} title={d.title} key={d.id}/>)

  return (
    <div className="App">
      <div className='Input'>
        <Search />
        <Button />
      </div>
      <div>
        {renderGifs()}
      </div>
    </div>
  );
};

export default App;
