import { FETCH_ALL, CREATE, SET } from '../constants/actionTypes';
// eslint-disable-next-line import/no-anonymous-default-export
export const colors = (colors = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...colors, action.payload];
        default:
            return colors;
    }
}

export const color = (color = [], action) => {
    switch (action.type) {
        case SET:
            return color = action.payload;
        default:
            return color;
    }
}