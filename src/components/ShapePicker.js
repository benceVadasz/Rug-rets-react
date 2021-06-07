import React from 'react';
import { useSelector } from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import ShapeAdder from "./ShapeAdder";
import Brush from '../assets/rugShapes/brush.js'
import Shape from "./Shape";


const ShapePicker = () => {

    const shapes = useSelector((state => state.shapes))
    const shapeSelection = useSelector((state => state.shapeSelection));

    const useStyles = makeStyles(() => ({
        colorSelector: {
            display: 'flex',
            alignItems: 'flex-start',
            overflow: 'scroll'
        }
    }));
    const classes = useStyles();
    // todo: check what the design type selection is in redux store | fetch it in useEffect

    return (
        <div className={classes.colorSelector}>
            {shapeSelection === 'custom' ? <ShapeAdder/> : null}
            <Shape name={'brush'}/>
        </div>
    );
}

export default ShapePicker;