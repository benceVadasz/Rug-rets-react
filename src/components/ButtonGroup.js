import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {saveDesign} from "../actions/designs";

const ButtonGroup = () => {
    const useStyles = makeStyles(() => ({
        orderBtn: {
            backgroundColor: "#26474E",
            boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'
        },
        saveBtn: {
            // border: '1px solid #26474E',
            boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'
        },
        buttonContainer: {
            margin: '0 auto',
            width: '60%',
            display: "flex",
            justifyContent: 'space-between',
            alignItems: 'center'
        }
    }));
    const classes = useStyles();

    const dispatch = useDispatch();
    // if (loading)
    //     return (
    //         <div className={classes.load}>
    //             <Loading/>
    //         </div>
    //     );

    const shape = useSelector((state => state.shape))
    const initColors = useSelector((state => state.shapeColorArray))
    const save = () => {
        const colors = replaceEmptyValues(initColors)
        dispatch(saveDesign({shape, colors}))
    }

    const replaceEmptyValues = colorList => {
        const fin = []
        for (let colorCode of colorList) {
            if (!colorCode) {
                fin.push("white")
            }
            else {
                fin.push(colorCode)
            }
        }
        return fin
    }

    return (
        <>
            <Button variant="contained" className={classes.orderBtn + ' lower-case white'}>
                Order
            </Button>
            <Button onClick={save} variant="contained" className={classes.saveBtn + ' lower-case'}>
                Save
            </Button>
        </>
    );
}

export default ButtonGroup;