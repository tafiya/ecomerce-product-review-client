import { useEffect, useState } from "react";
import EachProduct from "../../../pages/product/EachProduct";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const HomeCategory = ({items}) => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        setProducts(items)
    },[items])
    return (
        <div>
                 <div className="max-w-[1248px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mb-24">
                {
                    products.slice(0,6).map(product=><EachProduct key={product._id} product={product}></EachProduct>)
                }

            </div>
            <div className='flex justify-center my-4'>
            <Link to='/products'>   <button className=' flex gap-2 items-center bg-white btn text-lg font-medium'> See more <FaArrowRight /></button></Link>
           </div>
        </div>
    );
};

export default HomeCategory;