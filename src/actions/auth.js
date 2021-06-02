import { AUTH } from '../constants/actionTypes';
import * as api from '../api/shapesAPI';

export const signIn = (formData, history) => async (dispatch) => {
    try {

        history.push('/');
    }
    catch (error) {
        console.log(error.message);
    }
}

export const signUp = (formData, history) => async (dispatch) => {
    try {

        history.push('/');
    }
    catch (error) {
        console.log(error.message);
    }
}