
export const addCountry = country => {
    return {
        type:'ADD_COUNTRY',
        payload: country
    }
}

export const removeCountry = country => {
    return {
        type: 'REMOVE_COUNTRY',
        payload: country
    }
}

// created to deliver filtered search countries to CountriesList component
export const updateCountryList = countries => {
    return {
        type: 'UPDATE_COUNTRY_LIST',
        payload: countries
    }
}

// created to set original country list to CountriesList component once you choose a region
export const setCountryList = countries => {
    return {
        type: 'SET_COUNTRY_LIST',
        payload: countries
    }
}

export const setRegion = region => {
    return {
        type:'SET_REGION',
        payload: region
    }
}

export const selectCountry = country => {
    return {
        type: 'SELECT_COUNTRY',
        payload: country
    }
}