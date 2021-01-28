import React from 'react';

const SearchLabel = (props) => {
    if (!props.searchSelected) {
        return <label>Search for country in: {props.region}</label>;
    } else {
        return <label>Search for a country in your current selection.</label>;
    }
}

export default SearchLabel;