import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import EachProductView from "./EachProductView";


const ProductView = () => {
    const {id}=useParams();
    const [NewItem,setItem]=useState([])
    const products =useLoaderData();
    useEffect(()=>{
        const newEvent= products?.find(item=>item?._id==id);
        setItem(newEvent);
    },[id,products])
    console.log(NewItem);
 
    return (
        <div className=" my-32 flex items-center justify-center">
          <EachProductView    NewItem={NewItem} key={NewItem._id}></EachProductView>
        </div>
    );
};

export default ProductView;