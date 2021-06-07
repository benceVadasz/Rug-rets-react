import {FETCH_ALL, CREATE, SET_SHAPE_TYPE} from '../constants/actionTypes';
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

export const shapeSelection = (shapeSelection = [], action) => {
    switch (action.type) {
        case SET_SHAPE_TYPE:
            return shapeSelection = action.payload;
        default:
            return shapeSelection;
    }
}