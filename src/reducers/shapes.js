import { FETCH_ALL, CREATE } from '../constants/actionTypes';
// eslint-disable-next-line import/no-anonymous-default-export
export const shapes = (shapes = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...shapes, action.payload];
        default:
            return shapes;
    }
}