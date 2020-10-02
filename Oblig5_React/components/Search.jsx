import React from 'react';

function Search({ handleSearch, handleSearchClick }) {


    return (
        <div className="search">
            <input onChange={handleSearch} type="text" placeholder="Search on Title" />
            <button className="knapp" onClick={handleSearchClick}>Search</button>
        </div>
    )
}

export default Search;
