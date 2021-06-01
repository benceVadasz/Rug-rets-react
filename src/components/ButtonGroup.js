import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import {Button} from "@material-ui/core";


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
    // if (loading)
    //     return (
    //         <div className={classes.load}>
    //             <Loading/>
    //         </div>
    //     );

    return (
        <>
            <Button variant="contained" className={classes.orderBtn + ' lower-case white'}>
                Order
            </Button>
            <Button variant="contained" className={classes.saveBtn + ' lower-case'}>
                Save
            </Button>
        </>
    );
}

export default ButtonGroup;