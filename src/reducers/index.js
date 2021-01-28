import {combineReducers} from 'redux';

const selectionReducer = (selection = [], action) => {
    switch (action.type) {
        case 'ADD_COUNTRY':
            return [...selection, action.payload];
        case 'REMOVE_COUNTRY':
            return selection.filter(element => element !== action.payload);
        default:
            return selection;
    }
}

// created to deliver filtered search countries to CountriesList component
const updateCountryListReducer = (searchCountryList = [], action) => {
    if (action.type === 'UPDATE_COUNTRY_LIST'){
        return action.payload;
    }
    return searchCountryList;
}

// created to set original country list to CountriesList component once you choose a region
const setCountryListReducer = (countryList = [], action) => {
    if (action.type === 'SET_COUNTRY_LIST'){
        return action.payload;
    }
    return countryList;
}

const setRegionReducer = (region='select region to search', action) => {
    if (action.type === 'SET_REGION'){
        return action.payload;
    }
    return region;
}

const selectCountryReducer = (country = null, action) => {
    if (action.type === 'SELECT_COUNTRY'){
        return action.payload;
    }
    return country;
}

export default combineReducers({
    selection: selectionReducer,
    searchCountryList: updateCountryListReducer,
    countryList: setCountryListReducer,
    region: setRegionReducer,
    country: selectCountryReducer
});