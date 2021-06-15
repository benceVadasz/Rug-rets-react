import React, {useEffect} from "react";
import {makeStyles} from '@material-ui/core/styles';
import AddNewColor from "./AddNewColor";
import {useDispatch, useSelector} from "react-redux";
import {setColor, getColors} from "../actions/colors";
import {COLORS} from "../data/colors";


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
    const customColors = useSelector((state => state.colors))
    const colorSelection = useSelector((state => state.colorSelection))

    let colors = colorSelection === 'custom' ? customColors : COLORS;
    console.log(colors)

    useEffect(() => {
        dispatch(getColors(userId))
    }, []);

    const selectColor = (value) => {
        dispatch(setColor(value))
    }

    return (
        <div className={classes.colorSelector}>
            {colors.map((color) =>
                (<div key={color.value} title={color.name} className={classes.color}
                      onClick={() => selectColor(color.value)} style={{background: color.value}}>
                </div>)
            )}
            {colorSelection === 'custom' ? <AddNewColor colors={colors}/> : null}
        </div>
    );
}

export default ColorPicker;