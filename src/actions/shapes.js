import {FETCH_ALL, CREATE, DELETE, SET_SHAPE_TYPE, SET_SHAPE} from '../constants/actionTypes';
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

export const uploadShape = (shape) => async (dispatch) => {
    try {
        const { data } = await api.uploadShape(shape);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteShape = (id) => async (dispatch) => {
    try {
        await api.deleteShape(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};

export const setShapeSelectionType = (type) => async (dispatch) => {
    try {
        dispatch({type: SET_SHAPE_TYPE, payload: type});
    } catch (error) {
        console.log(error.message);
    }
};

export const setShape = (name) => async (dispatch) => {
    try {
        dispatch({type: SET_SHAPE, payload: name});
    } catch (error) {
        console.log(error.message);
    }
};