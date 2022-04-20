import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const SearchBar = ({ getSearch, getData, query }) => {
    return (
    <div className='search-bar'>
        <TextField id="standard-basic" label="Search a GIF" variant="standard" type="search" onChange={getSearch} />
        <Button variant="contained" type="submit" onClick={getData}>Search</Button>
    </div>
    )
};

export default SearchBar;