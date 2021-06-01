import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';


const Design = () => {
    const useStyles = makeStyles(() => ({

        designContainer: {
            height: '90vh',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: 'repeat(8, 1fr)',
            gridColumnGap: 0,
            gridRowGap: 0,
        },
        designTypesContainer: {
            gridArea: '1 / 1 / 2 / 6',
        },
        shapePicker: {
            gridArea: '2 / 1 / 4 / 6'
        },
        canvas: {
            gridArea: '4 / 1 / 9 / 5'
        },
        colorPicker: {
            gridArea: '4 / 5 / 9 / 6'
        },
        buttonContainer: {
            gridArea: '8 / 5 / 9 / 6'
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

            </div>
            <div className={classes.shapePicker}>

            </div>
            <div className={classes.canvas}>

            </div>
            <div className={classes.colorPicker}>

            </div>
            <div className={classes.buttonContainer}>

            </div>
        </div>
    );
}

export default Design;