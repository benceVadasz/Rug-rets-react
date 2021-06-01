import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import {COLORS} from '../data/colors';
import AddNewColor from "./AddNewColor";


const Design = () => {
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
    // if (loading)
    //     return (
    //         <div className={classes.load}>
    //             <Loading/>
    //         </div>
    //     );

    return (
        <div className={classes.colorSelector}>
            {COLORS.map((color) =>
             (<div key={color.value} title={color.name} className={classes.color}
                   onClick={() =>console.log(color.name)} style={{background: color.value}}>
             </div>)
            )}
            <AddNewColor/>
        </div>
    );
}

export default Design;