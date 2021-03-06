import {CREATE_DESIGN, FETCH_ALL} from "../constants/actionTypes";
import * as api from "../api";

export const getDesigns = (userId) => async (dispatch) => {
    try {
        const {data} = await api.fetchDesigns(userId);

        dispatch({type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }
};

export const saveDesign = (designData) => async (dispatch) => {
    try {

        const {data} = await api.saveDesign(designData);

        dispatch({type: CREATE_DESIGN, payload: data});
    } catch (error) {
        console.log(error.message);
    }
};