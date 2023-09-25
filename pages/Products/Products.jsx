import { useEffect, useState } from "react";
import Product from "./Product";

const ProductPage=()=>{
const [items,setItems]=useState([])


console.log(items);
useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then((res) => res.json())
    .then((data) => {
      setItems(data)
    })
},[])



return(
<div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-4 ">
      {
        items.map((p) => (
        <Product  key={p.id} product={p}></Product>
      ))}
     
    </div>
)
   
}
export default ProductPage;