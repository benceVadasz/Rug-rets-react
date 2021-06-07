import { combineReducers } from "redux";
import shapes from './shapes';
import auth from './auth';
import {colors} from './colors';
import {color} from './colors';

export const reducers = combineReducers({ shapes, auth, colors, color });