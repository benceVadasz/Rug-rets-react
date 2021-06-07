import {CREATE, DELETE, FETCH_ALL, SET, SET_TYPE} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const setColor = (value) => async (dispatch) => {
    try {
        dispatch({type: SET, payload: value});
    } catch (e) {
        console.log(e)
    }
}

export const getColors = (userId) => async (dispatch) => {
    try {
        const {data} = await api.fetchColors(userId);

        dispatch({type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }
};

export const uploadColor = (colorData) => async (dispatch) => {
    try {
        const {data} = await api.uploadColor(colorData);

        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log('in catch')
        console.log(error.message);
    }
};

export const deleteColor = (value) => async (dispatch) => {
    console.log(value)
    try {
        await api.deleteColor(value);

        dispatch({type: DELETE, payload: value});
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

export const setColorSelectionType = (type) => async (dispatch) => {
    try {
        dispatch({type: SET_TYPE, payload: type});
    } catch (error) {
        console.log(error.message);
    }
};