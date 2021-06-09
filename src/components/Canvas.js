import React, {useState} from 'react';
import { useSelector } from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
// import brush from '../assets/brush.svg';
import Rug from "./Rug";

const Canvas = () => {

    const shape = useSelector((state => state.shape))
    const color = useSelector((state => state.color))
    const colorArray = useSelector((state => state.shapeColorArray))
    const [fillColors, setFillColors] = useState(colorArray)
    console.log(fillColors)


    const useStyles = makeStyles(() => ({
        canvas: {
            overflow: 'auto',
            // cursor: `url('${brush}'), auto`,
        }
    }));
    const classes = useStyles();
    // todo: check what the design type selection is in redux store | fetch it in useEffect

    const fill = (i) => {
        console.log(color)
        let newFillColors = fillColors.slice(0)
        newFillColors[i] = color
        setFillColors(newFillColors)
    }

    return (
        <div className={classes.canvas}>
            <Rug file={shape} onFill={fill} fillColors={fillColors}/>
        </div>
    );
}

export default Canvas;