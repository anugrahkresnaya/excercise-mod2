import './App.css';
// import Search from './components/search/index';
// import Button from './components/button/index';
import { ImageProps } from './components/image';
// import data from './components/gif/data';
// import axios from 'axios';
import { Component } from 'react';
import SearchBar from './pages/search';
import axios from 'axios';
import { useState } from 'react';

const API_KEY = 'FMQABWCRKUTLpJ7uo06TbIcLGmw54rlp';

function App() {
  // const renderGifs = () => data.filter((d) => d.rating === 'g')
  // .map((d) => <ImageProps image={d.url} title={d.title} key={d.id}/>)
  const [search, setSearch] = useState('');
  const [gifs, setGifs] = useState('');

  const searchChange = (e) => { setSearch(e.target.value) };

  const getGiphyGifs = (e) => {
    e.preventDefault();
    const temp = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=12`;
    fetch(temp)
    .then((response) => response.json())
    .then(data => {setGifs(data)});
  };
  
  return (
    <div className="App">
      <div className='Input'>
        {/* <Search />
        <Button /> */}
        <SearchBar getData={getGiphyGifs} getSearch={searchChange} />
        {gifs.data?.map((gif) => (
          <ImageProps title={gif.title} image={gif.images.fixed_width.url} key={gif.id} />
        ))}
      </div>
      <div>
        {/* {renderGifs()} */}
      </div>
    </div>
    )
  }

export default App;
