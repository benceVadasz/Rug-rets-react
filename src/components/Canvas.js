import React, {useState} from 'react';
import { useSelector } from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import brush from '../assets/brush.svg';
import Flower from "../assets/flower";

const Canvas = () => {

    const shapes = useSelector((state => state.shapes))
    const color = useSelector((state => state.color))
    const [fillColors, setFillColors] = useState(Array(22).fill('white'))


    const useStyles = makeStyles(() => ({
        canvas: {
            overflow: 'auto',
            cursor: `url('${brush}'), auto`,
        }
    }));
    const classes = useStyles();
    // todo: check what the design type selection is in redux store | fetch it in useEffect

    const fill = (i) => {
        let newFillColors = fillColors.slice(0)
        newFillColors[i] = color
        setFillColors(newFillColors)
    }

    return (
        <div className={classes.canvas}>
            <Flower onFill={fill} fillColors={fillColors}/>
        </div>
    );
}

export default Canvas;