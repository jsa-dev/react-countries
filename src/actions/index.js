
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
