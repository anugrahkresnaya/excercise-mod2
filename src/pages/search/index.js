const SearchBar = ({ getSearch, getData, gif }) => {
    return <div>
        <input type="search" onChange={getSearch} value={gif} />
        <input 
            type="submit" 
            value="Search Gif" 
            onClick={getData} 
        />
    </div>
};

export default SearchBar;