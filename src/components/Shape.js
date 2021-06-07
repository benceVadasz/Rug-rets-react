import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
import Brush from "../assets/rugShapes/brush";
import {useDispatch} from "react-redux";
import {setShape} from "../actions/shapes";


const Shape = ({name}) => {

    const useStyles = makeStyles(() => ({
        paper: {
            minWidth: 250,
            height: 130,
            borderRadius: 5,
            cursor: 'pointer',
            border: '1px solid black',
            marginLeft: 10,
            marginBottom: 15
        },
        flexBox: {
            margin: '0 auto',
            display: 'flex',
            flexFlow: "column",
            justifyContent: 'space-around',
            alignItems: 'center',
        },
    }));
    const classes = useStyles();
    const dispatch = useDispatch();

    const selectShape = (name) => {
        dispatch(setShape(name))
    }

    return (
        <Button onClick={() => selectShape(name)} className={classes.paper}>
            <div className={classes.flexBox}>
                <Brush/>
            </div>
        </Button>
    );
}

export default Shape;