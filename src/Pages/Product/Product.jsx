import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Product = () => {
    // const Products = useLoaderData();
    // console.log(Products.products)
    const [data, setData] = useState([]);
    useEffect(()=>{
        // const fechingData = async() =>{
        //     try{
        //         const res = await fetch(`https://dummyjson.com/products`);
        //         const dataa = await res.json();
        //         setData(dataa.products);
        //     }
        //     catch(error){
        //         console.log(error)
        //     }
        // }
        // fechingData();

        fetch(`https://dummyjson.com/products`)
        .then(res => res.json())
        .then(dataa => setData(dataa.products))
    },[])
    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {
                    data?.map(product => <ProductCard key={product.id} product={product}></ProductCard> )
                }
            </div>
        </div>
    );
};

export default Product;