import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Rug from "./Rug";
import {useDispatch} from "react-redux";
import {setColorArray} from "../actions/shapes";

const Canvas = () => {
    const dispatch = useDispatch();
    const shape = useSelector((state => state.shape))
    const color = useSelector((state => state.color))
    const colorArray = useSelector((state => state.shapeColorArray))

    const useStyles = makeStyles(() => ({
        canvas: {
            overflow: 'auto',
            // cursor: `url('${brush}'), auto`,
        }
    }));
    const classes = useStyles();
    // todo: check what the design type selection is in redux store | fetch it in useEffect

    const fill = (i) => {
        const newFillColors = add(i);
        dispatch(setColorArray(newFillColors))
    }

    const add = (index) => {
        const fin = []
        for (let i = 0; i < colorArray.length; i++) {
            if (i === index) {
                fin.push(color)
            } else if (colorArray[i] === 'white') {
                fin.push('white')
            } else {
                fin.push(colorArray[i])
            }
        }
        return fin;
    }

    return (
        <div className={`${classes.canvas} canvas`}>
            {colorArray.length>0?<Rug file={shape} onFill={fill} fillColors={colorArray}/>:null}
        </div>
    );
}

export default Canvas;