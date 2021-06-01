import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const AddNewColor = () => {
    const useStyles = makeStyles(() => ({
        color: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            height: 70,
            borderRadius: 5,
            border: '1px solid black',
            cursor: 'pointer',
            marginBottom: 30
        },
        icon: {
            width: 40,
            height: 40
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
        <div title="Add new color" className={classes.color} onClick={() => console.log('clicked')}>
            <AddIcon className={classes.icon}/>
        </div>
    );
}

export default AddNewColor;