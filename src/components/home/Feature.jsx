
import { FaArrowRight } from "react-icons/fa";
import EachProduct from "../../pages/product/EachProduct";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";


const Feature = () => {
    const [products] =useProducts();
    console.log(products)
    return (
        <div className="max-w-[1248px] mx-auto">
            <div className=" flex lg:flex-row flex-col">
            <div className=" lg:p-0 p-10 lg:w-[20%]">
                <h2 className=" text-[32px] font-bold">
                Best Selling <br /> Plants
                </h2>
                <p className=" text-lg font-medium">Easiest way to healthy life by buying your favorite plants </p>
                <Link to='/products'>   <button className=' flex gap-2 items-center bg-[#C1DCDC] btn text-lg font-medium'> See more <FaArrowRight /></button></Link>
             
            </div>
            <div className=" lg:w-[80%] grid gap-10 mb-24 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
                   { products.slice(0,3).map(product=><EachProduct key={product._id} product={product}></EachProduct>)}
            </div>

            </div>
            
            
        </div>
    );
};

export default Feature;