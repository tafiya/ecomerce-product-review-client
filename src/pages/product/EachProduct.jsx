import { Link } from "react-router-dom";
import './Item.css';
import { FaEye, FaStar } from "react-icons/fa";

const EachProduct = ({product}) => {
    const {_id,image,name,price,category,brand,rating}=product;
    return (
        <div className='card card-compact h-[520px]  bg-base-100 shadow-xl'>
        <div className="card_effect p-0 ">
     <img className="pic1 h-[400px] w-96" src={image} />
     <div className="card_effect_in">
         <img src={image} className=' h-[400px] w-96'/>
   <Link className='flex items-center justify-center' to={`/productView/${_id}`}><FaEye size={'2rem'} /></Link>
         
     </div>   
     </div>
            <div className="card-body h-[120px] ">
                <div className=" flex justify-between">
                    <h2 className=" text-lg font-medium text-start">{name}</h2>
                    <div className=" flex items-center gap-1">
                        {rating}
                        <FaStar color="" />
                    </div>
                </div>
                <h1 className="text-[#1E1E1E80] ">{category}</h1>
                <p className=" font-semibold text-base" >${price}</p>
 <div className="card-actions justify-end">
   {/* <button onClick={handleCart} className="btn btn-outline"> <TiShoppingCart />Add to cart</button> */}
 </div>
 </div>
     </div>
    );
};

export default EachProduct;