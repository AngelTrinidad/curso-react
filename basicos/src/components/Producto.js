import React from 'react';

//props.producto
const Producto = ({producto}) => {
    return ( 
    <div>
        <h1>{producto.name}</h1>
        <h2>{producto.price}</h2>
    </div>)
}

export default Producto;