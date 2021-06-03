import React from 'react';
import { useSelector } from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Shape from "./Shape";
import ShapeAdder from "./ShapeAdder";


const ShapePicker = () => {

    const shapes = useSelector((state => state.shapes))

    const useStyles = makeStyles(() => ({
        colorSelector: {
            display: 'flex',
            alignItems: 'flex-start',
        }
    }));
    const classes = useStyles();
    // todo: check what the design type selection is in redux store | fetch it in useEffect

    return (
        <div className={classes.colorSelector}>
            <ShapeAdder />
        </div>
    );
}

export default ShapePicker;