import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import {Button, Paper} from "@material-ui/core";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";

const MySwal = withReactContent(Swal)

const ShapeAdder = () => {
    const [shapeData, setShapeData] = useState({name: '', selectedFile: ''});
    const dispatch = useDispatch();

    const useStyles = makeStyles(() => ({
        paper: {
            width: 250,
            height: 130,
            borderRadius: 5,
            cursor: 'pointer',
            border: '1px solid black',
            marginLeft: 10
        },
        flexBox: {
            margin: '0 auto',
            display: 'flex',
            flexFlow: "column",
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        icon: {
            width: 100,
            height: 100
        },
        addLabel: {
            fontSize: 20
        }
    }));
    const classes = useStyles();

    const addShape = () => {
        MySwal.fire({
            title: 'Add new shape as SVG file',
            input: 'file',
            inputAttributes: {
                autocapitalize: 'off',
            },
            confirmButtonText: 'Upload',
            showCancelButton: true,
        }).then((file) => {
            // todo: ask Adam how to add svg
            console.log(file?.contentDocument)
        })
    };

    return (
        <Button onClick={addShape} className={classes.paper}>
            <div className={classes.flexBox}>
            <Typography className={'lower-case ' + classes.addLabel} variant="caption">
                Add new shape
            </Typography>
            <AddIcon className={classes.icon}/>
            </div>
        </Button>
    );
}

export default ShapeAdder;