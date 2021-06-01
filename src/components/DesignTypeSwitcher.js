import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const DesignTypeSwitcher = () => {
    const [types, setTypes] = React.useState('left');
    const useStyles = makeStyles(() => ({
        switcher: {
            height: '50%',
            boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
        }
    }));
    const classes = useStyles();
    const handleTypes = (event, newAlignment) => {
        setTypes(newAlignment);
    };
    // if (loading)
    //     return (
    //         <div className={classes.load}>
    //             <Loading/>
    //         </div>
    //     );

    return (
        <ToggleButtonGroup
            value={types}
            exclusive
            onChange={handleTypes}
            aria-label="text alignment"
            className={classes.switcher}
        >
            <ToggleButton className='lower-case' value="left" aria-label="left aligned">
                Pre-made
            </ToggleButton>
            <ToggleButton className='lower-case' value="center" aria-label="centered">
                Custom
            </ToggleButton>

        </ToggleButtonGroup>
    );
}

export default DesignTypeSwitcher;