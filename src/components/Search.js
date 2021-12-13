import React from 'react';

function Search({ search, handleSearch }) {
    return (
        <div className="ui large fluid icon input">
            <input
                type="text"
                placeholder="Search through your trips by location"
                value={search}
                onChange={handleSearch}
            />
            <i className="circular search link icon"></i>
        </div>
    );
}

export default Search;
