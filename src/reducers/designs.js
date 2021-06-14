import {CREATE_DESIGN, FETCH_ALL} from "../constants/actionTypes";

export const designs = (designs = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE_DESIGN:
            return [...designs, action.payload];
        default:
            return designs;
    }
}