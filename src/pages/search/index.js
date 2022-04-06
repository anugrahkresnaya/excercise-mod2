const SearchBar = ({ getSearch, getData, query }) => {
    return <div>
        <input type="search" onChange={getSearch} />
        <input 
            type="submit" 
            value="Search Gif"
            onClick={getData} 
        />
    </div>
};

export default SearchBar;