import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import cbg from '../assets/canvas-bg.png';
import ColorPicker from "../components/ColorPicker";
import DesignTypeSwitcher from "../components/DesignTypeSwitcher";


const Design = () => {
    const useStyles = makeStyles(() => ({

        designContainer: {
            height: '90vh',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: 'repeat(9, 1fr)',
            gridColumnGap: 0,
            gridRowGap: 0,
        },
        designTypesContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gridArea: '1 / 1 / 2 / 6',
        },
        shapePicker: {
            gridArea: '2 / 1 / 4 / 6'
        },
        canvas: {
            gridArea: '4 / 1 / 10 / 5',
            backgroundColor: '#e5e5f7',
            opacity: 0.5,
            backgroundImage:  'linear-gradient(#D1CFC5 1px, transparent 1px), linear-gradient(to right, #D1CFC5 1px, #F5F3E7 1px)',
            backgroundSize: '20px 20px',
            overflow: 'scroll'

        },
        colorPicker: {
            overflow: 'scroll',
            gridArea: '4 / 5 / 9 / 6'
        },
        buttonContainer: {
            gridArea: '9 / 5 / 10 / 6'
        }

    }));
    const classes = useStyles();
    // if (loading)
    //     return (
    //         <div className={classes.load}>
    //             <Loading/>
    //         </div>
    //     );

    return (
        <div className={classes.designContainer}>
            <div className={classes.designTypesContainer}>
                <DesignTypeSwitcher/>
            </div>
            <div className={classes.shapePicker}>
                <h1>shapes</h1>
            </div>
            <div className={classes.canvas}>
                <h1>canvas</h1>
            </div>
            <div className={classes.colorPicker}>
                <ColorPicker/>
            </div>
            <div className={classes.buttonContainer}>
            </div>
        </div>
    );
}

export default Design;