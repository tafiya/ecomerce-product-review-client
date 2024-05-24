import { Link } from 'react-router-dom';
import category1 from '../../assets/image/category1.png'
import category2 from '../../assets/image/category2.png'
import category3 from '../../assets/image/category3.png'
import { FaArrowRight } from "react-icons/fa";
const Category = () => {
    return (
        <div className="flex items-center flex-col justify-center">
              <div className=" text-center mb-16">
                <h2 className=" text-[32px] font-bold text-[#1E1E1E] mb-4">Categories</h2>
                <p className=" text-lg font-medium text-[#1E1E1E80] ">Find what you are looking for</p>

            </div>
            <div className=" bg-[#C1DCDC] lg:h-[841px] w-full mb-24">
           <div className='grid md:grid-cols-3 grid-cols-1 max-w-[1248px] mx-auto  '>
            <div className='lg:-mt-12 flex justify-center'>
                <div>
                <img src={category1} className=' lg:h-[512px]' alt="" />
                <h2 className=' text-lg font-bold text-center my-3'>Natural Plants</h2>
                </div>
            </div>
            <div className='lg:mt-12  flex justify-center'>
                <div>
                <img src={category2} alt="" />
                <h2 className=' text-lg font-bold text-center my-3'>Plant Accessories</h2>
                <p className=' text-center text-[#1E1E1E80] font-medium my-3'>Horem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className='lg:-mt-12 flex justify-center'>
                <div>
                <img src={category3} className='lg:h-[512px]' alt="" />
                <h2 className=' text-lg font-bold text-center my-3'>Artificial Plants</h2>
                </div>
            </div>
           </div>
           <div className='flex justify-center my-4'>
           <Link to='/products'>   <button className=' flex gap-2 items-center bg-white btn text-lg font-medium'> Explore<FaArrowRight /></button></Link>
           </div>
          
            </div>
        </div>
        
    );
};

export default Category;