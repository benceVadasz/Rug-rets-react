import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {saveColor} from '../data/colors.js'



const AddNewColor = ({addColor, colors}) => {
    const MySwal = withReactContent(Swal)
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


    const addNewColor = () => {
        MySwal.fire({
            title: 'Add new Color',
            input: 'text',
            inputValue: '#',
            inputAttributes: {
                autocapitalize: 'off',
            },
            confirmButtonText: 'Add',
            showCancelButton: true,
        }).then((hexCode) => {
            addColor([...colors, {"name": "", "value": hexCode.value}])
            // todo: ask Adam to make this work
            saveColor( "", hexCode.value)
        })
        // if (loading)
//     return (
//         <div className={classes.load}>
//             <Loading/>
//         </div>
//     );
    }
    return (
        <div title="Add new color" className={classes.color} onClick={addNewColor}>
            <AddIcon className={classes.icon}/>
        </div>
    );
}

export default AddNewColor;