import React from 'react';


const Rug = ({onFill, fillColors, file}) => {
    const {Img} = import("../assets/rugShapes/" + file + 'js')
    return (
        <Img/>
    );
}


export default Rug;