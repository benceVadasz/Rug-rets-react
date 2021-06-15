import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from "react-redux";
import Typography from "@material-ui/core/Typography";
import {Grid, Slider} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

}));

export const Zoom = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const dispatch = useDispatch();

    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Typography id="input-slider" gutterBottom>
                Zoom in
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
                <Grid item>

                </Grid>
            </Grid>
        </div>
    );
}

