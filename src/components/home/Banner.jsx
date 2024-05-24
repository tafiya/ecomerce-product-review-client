
import line from '../../assets/image/Line 2.png'
import circle from '../../assets/image/Rectangle 2.png'
import plantpicture from '../../assets/image/unsplash_cLaaxa4DSnc-removebg-preview 1.png'
import vector1 from '../../assets/image/Vector 186.png';
import vector2 from '../../assets/image/Vector 187.png'
import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import Feature from "./Feature";
import HomeProduct from "./homeProduct/HomeProduct";

const Banner = () => {
    const [products]=useProducts();
    // const [searchQuery, setSearchQuery] = useState('');
    const [tagFilter, setTagFilter] = useState('');
  
    const handleTagFilterChange = (event) => {
      setTagFilter(event.target.value);
    };
  
    const handleSearchChange = (event) => {
      event.preventDefault();
     
    };
  
    const filteredItems = products.filter(post => post.name.includes(tagFilter));
   
    console.log(filteredItems);
    return (
        <div>
               <div className=" px-24 md:h-[512px] bg-[#C1DCDC] rounded-3xl max-w-[1248px] mx-auto mb-24 mt-20">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-32 py-24">
        <div className="">
            <h1 className="text-5xl font-bold mb-8">Buy your <br /> dream plants</h1>
            <div className=" flex gap-12 font-medium">
                <div>
                    <h2 className='text-[32px] '> 50+</h2>
                <p className='text-lg'>
                Plant Species
                </p>
                </div>
                <div> 
                    <img src={line} className='w-18' alt="" /> </div>
                <div>
                    <h2 className='text-[32px] '> 100+</h2>
                <p className='text-lg'>
                Customers
                </p>
                </div>
               
            </div>
        
               <form className='mt-4 ' onSubmit={handleSearchChange}  action=" ">
              <input type="text"
                placeholder="Search by Plant name..."
                value={tagFilter}
                onChange={handleTagFilterChange}
                className="input my-4 mr-4 text-black input-bordered input-success w-[200px] sm:w-[400px] shadow-lg shadow-[#2D9596]" />
              
            </form>
            
          </div>
            <div className=" flex items-center justify-center lg:py-7 ">
         <img src={vector1} className="p-3 lg:flex hidden" alt="" />
<img src={circle} className=" relative" alt="" />
<img src={plantpicture} className=" absolute -mt-[106px]" alt="" />
<img src={vector2} className="md:-mt-96 md:mr-24 lg:flex hidden" alt="" />

            </div>
          
         
        </div>
      </div>
            <Feature></Feature>
            <HomeProduct products={filteredItems}></HomeProduct>
        </div>
     
    );
};

export default Banner;