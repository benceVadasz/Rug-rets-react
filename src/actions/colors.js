import { FETCH_ALL, CREATE, DELETE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getColors = (userId) => async (dispatch) => {
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

export const deleteColor = (id) => async (dispatch) => {
    try {
        await api.deleteColor(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};