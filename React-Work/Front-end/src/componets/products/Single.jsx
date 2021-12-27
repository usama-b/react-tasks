import React from 'react';
const Single = ({product}) => {
    return ( 

        <>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.company}</p>
        <p>{product.colour}</p>
        <hr />
       
    </>
     );
}
 
export default Single;