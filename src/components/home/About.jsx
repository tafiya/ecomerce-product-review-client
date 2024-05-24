import plant from '../../assets/image/Vector.png'
import box from '../../assets/image/Vector (1).png'
import phone from '../../assets/image/Vector (2).png'

const About = () => {
    return (
        <div className=" flex items-center flex-col justify-center max-w-[1248px] mx-auto my-24 ">
          
            <div className=" text-center mb-16">
                <h2 className=" text-[32px] font-bold text-[#1E1E1E] mb-4">About us</h2>
                <p className=" text-lg font-medium text-[#1E1E1E80] ">Order now and appreciate the beauty of nature</p>

            </div>
            <div className=" grid md:grid-cols-3 gap-6 grid-cols-1">
            <div className="flex flex-col items-center justify-center space-y-6 text-lg">
                <div className='border rounded-full bg-[#C1DCDC]  p-4 '>
                <img src={plant} className='  h-10 w-10' alt=""  />
                </div>
             
              <h6 className="text-center font-bold text-[#000000]">Large Assortment</h6>
              <p className=' text-center text-[#1E1E1E80] font-medium'>we offer many different types of products <br /> with fewer variations in each category.</p>
             
          </div>
          <div className="flex flex-col items-center justify-center space-y-6 text-lg">
                <div className='border rounded-full bg-[#C1DCDC]  p-4 '>
                <img src={box} className='  h-10 w-10' alt=""  />
                </div>
             
              <h6 className="text-center font-bold text-[#000000]">Fast & Free Shipping</h6>
              <p className=' text-center text-[#1E1E1E80] font-medium'>4-day or less delivery time, free shipping <br /> and an expedited delivery option.</p>
             
          </div>
          <div className="flex flex-col items-center justify-center space-y-6 text-lg">
                <div className='border rounded-full bg-[#C1DCDC]  p-4 '>
                <img src={phone} className='  h-10 w-10' alt=""  />
                </div>
             
              <h6 className="text-center font-bold text-[#000000]">24/7 Support</h6>
              <p className=' text-center text-[#1E1E1E80] font-medium'>answers to any business related inquiry <br /> 24/7 and in real-time.</p>
             
          </div>


            </div>

           
            
            
        </div>
    );
};

export default About;