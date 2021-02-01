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

export default combineReducers({
    selection: selectionReducer,
});