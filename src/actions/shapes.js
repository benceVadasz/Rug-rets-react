import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * as api from '../api/shapesAPI';

export const getShapes = () => async (dispatch) => {
    try {
        const { result } = await api.fetchShapes();
        dispatch({ type: FETCH_ALL, payload: result });
    }
    catch (error) {
        console.log(error.message);
    }
}