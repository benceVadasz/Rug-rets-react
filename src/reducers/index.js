import { combineReducers } from "redux";
import shapes from './shapes';
import auth from './auth';

export const reducers = combineReducers({ shapes, auth });