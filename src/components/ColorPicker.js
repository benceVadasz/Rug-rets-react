import React, {useEffect, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import {COLORS} from '../data/colors';
import AddNewColor from "./AddNewColor";
import {useDispatch, useSelector} from "react-redux";
import { getColors } from "../actions/colors";


const ColorPicker = () => {
    const useStyles = makeStyles(() => ({
        colorSelector: {
            display: 'flex',
            margin: '0 auto',
            flexFlow: 'row wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '70%',
            right: 0,
            left: 0,
        },
        color: {
            width: 70,
            height: 70,
            borderRadius: 5,
            cursor: 'pointer',
            marginBottom: 30,
            boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'
        }
    }));
    const classes = useStyles();
    const dispatch = useDispatch();
    const userId = JSON.parse(localStorage.getItem('profile')).result._id ||
        JSON.parse(localStorage.getItem('profile')).result.googleId;
    console.log('id', userId)
    const colors = useSelector((state => state.colors))

    useEffect(() => {
        dispatch(getColors(userId))
    }, []);

    return (
        <div className={classes.colorSelector}>
            {colors.map((color) =>
             (<div key={color.value} title={color.name} className={classes.color}
                   onClick={() =>console.log(color.name)} style={{background: color.value}}>
             </div>)
            )}
            <AddNewColor colors={colors} />
        </div>
    );
}

export default ColorPicker;