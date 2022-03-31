const SearchBar = ({ getSearch, getData }) => {
    return <div className="searchButton">
        <input type="search" onChange={getSearch} />
        <input type="submit" value="Search Gif" onClick={getData} />
    </div>
};

export default SearchBar;