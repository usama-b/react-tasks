import axios from 'axios';
import React from 'react';
import Single from './Single';
const Products = () => {

    const [products, setproduct]= React.useState ([
   
    ])
    const getdata=  ()=>{


        axios.get("http://localhost:4000/api/products")
        .then((res)=>{

            setproduct(res.data);
        })
        .catch((err)=>{
            console.log(err);});
    }
    React.useEffect(getdata,[])

    return (  



    <>
    
    <h1>
Products

    </h1>
    {products.length == 0 ?(<p>there is no product</p>):
    ( <div>  {products.map((product , index) => (

<Single  key={index} product={product}/>
)



)}</div>)}
   
    
     
    
    
    </>
    );
}
 
export default Products;