import { FETCH_ALL, CREATE } from '../constants/actionTypes';
import * as api from '../api';

export const getShapes = () => async (dispatch) => {
    try {
        const { result } = await api.fetchShapes();
        dispatch({ type: FETCH_ALL, payload: result });
    }
    catch (error) {
        console.log(error.message);
    }
}