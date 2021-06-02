import React from 'react';
import { useSelector } from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Shape from "./Shape";


const ShapePicker = () => {

    const shapes = useSelector((state => state.shapes))
    console.log(shapes)
    const useStyles = makeStyles(() => ({

    }));
    const classes = useStyles();

    return (
        <div className={classes.colorSelector}>

        </div>
    );
}

export default ShapePicker;