import {SET_ALERT_STATE, TOGGLE_ALERT_NEEDED} from "../constants/actionTypes";

export const setAlertState = (alertState) => async (dispatch) => {
    try {
        dispatch({type: SET_ALERT_STATE, payload: alertState});
    } catch (e) {
        console.log(e)
    }
}

export const toggleAlertNeeded = () => async (dispatch) => {
    try {
        dispatch({type: TOGGLE_ALERT_NEEDED});
    } catch (error) {
        console.log(error.message);
    }
};
