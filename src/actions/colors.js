import {CREATE, DELETE, FETCH_ALL} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getColors = (userId) => async (    dispatch) => {
    try {
        const { data } = await api.fetchColors(userId);

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const uploadColor = (colorData) => async (dispatch) => {
    try {
        const { data } = await api.uploadColor(colorData);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log('in catch')
        console.log(error.message);
    }
};

export const deleteColor = (value) => async (dispatch) => {
    console.log(value)
    try {
        await api.deleteColor(value);

        dispatch({ type: DELETE, payload: value });
    } catch (error) {
        console.log(error.message);
    }
};

export const colorExists = (hex) => async (dispatch) => {
    try {
        return await api.checkIfColorExists(hex)
    } catch (error) {
        console.log(error.message);
    }
};