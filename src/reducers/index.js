import { combineReducers } from "redux";
import {shapes} from './shapes';
import auth from './auth';
import {colors} from './colors';
import {color} from './colors';
import {colorSelection} from './colors';
import {shapeSelection} from './shapes';
import {alertNeeded} from './shapes';
import {shape} from './shapes';
import {shapeColorArray} from './shapes';
import {alertState} from './alert';
import {designs} from "./designs";

export const reducers = combineReducers({
    shapes, auth, colors, color, colorSelection,
    shapeSelection, shape, shapeColorArray,
    designs, alertNeeded, alertState});