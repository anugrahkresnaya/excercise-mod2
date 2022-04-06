import './App.css';
// import Search from './components/search/index';
// import Button from './components/button/index';
import { ImageProps } from './components/image';
// import data from './components/gif/data';
import SearchBar from './pages/search';
import axios from 'axios';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGif } from './store/querySlice';

const API_KEY = 'FMQABWCRKUTLpJ7uo06TbIcLGmw54rlp';

function App() {
  // const renderGifs = () => data.filter((d) => d.rating === 'g')
  // .map((d) => <ImageProps image={d.url} title={d.title} key={d.id}/>)
  // const [search, setSearch] = useState('');
  const [gifs, setGifs] = useState('');
  const gif = useSelector((state) => state.query.value);
  const dispatch = useDispatch();

  const searchChange = (e) => { dispatch(setGif(e.target.value)) };

  const getGiphyGifs = async () => {
    // e.preventDefault();
    // const temp = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=12`;
    await axios
    .get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${gif}&limit=12`)
    .then((response) => {
      setGifs(response.data)
    });
  };

  return (
    <div className="App">
      <div className='Input'>
        {/* <Search />
        <Button /> */}
        <SearchBar getData={getGiphyGifs} getSearch={searchChange} query={gif} />
        <div className='gif'>
          {gifs.data?.map((gif) => (
            <ImageProps title={gif.title} image={gif.images.fixed_width.url} key={gif.id} />
          ))}
        </div>
      </div>
      {/* <div>
        {renderGifs()}
      </div> */}
    </div>
    )
  }

export default App;
