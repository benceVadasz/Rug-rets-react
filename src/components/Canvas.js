import React from 'react';
import { useSelector } from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import test from '../assets/tool-box.svg';
import brush from '../assets/brush.svg';

const Canvas = () => {

    const shapes = useSelector((state => state.shapes))

    const useStyles = makeStyles(() => ({
        canvas: {
            overflow: 'auto',
            cursor: `url('${brush}'), auto`,
        }
    }));
    const classes = useStyles();
    // todo: check what the design type selection is in redux store | fetch it in useEffect

    return (
        <div className={classes.canvas}>
            <img src={test} />
        </div>
    );
}

export default Canvas;