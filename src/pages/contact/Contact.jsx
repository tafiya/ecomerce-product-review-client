import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
import { MdAddIcCall, MdOutlineEmojiEmotions, MdOutlineSupportAgent } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_72mwp9m', 'template_lbisfz6', form.current, '7vB9MUlUwmF8Xapqi')
        .then((result) => {
            console.log(result.text);
            console.log('message sent');

           
            Swal.fire({
              title: "Sent!",
              text: "Thanks for contact",
              imageUrl: "https://i.ibb.co/3SqyF8h/thankyou.png",
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: "Custom image"
            });
            e.target.reset();
          
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div  className="mb-24   ">
       <div className="max-w-screen-xl mx-auto flex flex-col ">
       <div className=" my-16 ">
             <h2 className=" text-7xl font-bold italic  text-center  text-white my-4" ><span className="bg-gradient-to-r from-[#2D9596] to-[#265073]
                       inline-block text-transparent bg-clip-text p-3">Get in touch</span></h2>
             <p className=" text-center text-xl font-semibold text-white mb-24" >Ready to help you faster?Lets chat how can we help</p>
             <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-8">
             <div className="bg-[#C1DCDC]  text-slate-700 md:p-4 md:mx-3 mx-0 rounded-xl ">
             <div className=" flex items-start mb-6 ">
                          <MdOutlineEmojiEmotions size={'2rem'}/>
                          </div>
                          <h4 className="text-2xl font-semibold text-start">Chat to connect</h4>
                         
                          <p className="text-sm leading-7 my-3 font-large text-start">
                              Speak to our friendly team</p>
                          <div className="flex items-center justify-start gap-7">
                             <button className="btn bg-white text-black hover:text-white"> Chat to connect</button>
                          </div>

                      </div>
                   
                      <div className="bg-[#C1DCDC]  text-slate-700 md:p-4 md:mx-3 mx-0 rounded-xl ">
             <div className=" flex items-start mb-6 ">
                          <MdOutlineSupportAgent size={'2rem'}/>
                          </div>
                          <h4 className="text-2xl font-semibold text-start">Chat to Support</h4>
                         
                          <p className="text-sm leading-7 my-3 font-large text-start">
                              We are here to support</p>
                          <div className="flex items-center justify-start gap-7">
                             <button className="btn bg-white text-black hover:text-white"> Chat to Support</button>
                          </div>

                      </div>
                      <div className="bg-[#C1DCDC]  text-slate-700 md:p-4 md:mx-3 mx-0 rounded-xl ">
             <div className=" flex items-start mb-6 ">
                          <FaDirections size={'2rem'}/>
                          </div>
                          <h4 className="text-2xl font-semibold text-start">Visit Us</h4>
                         
                          <p className="text-sm leading-7 my-3 font-large text-start">
                              Visit to our HQ</p>
                          <div className="flex items-center justify-start gap-7">
                             <button className="btn bg-white text-black hover:text-white"> Get Direction</button>
                          </div>

                      </div>
                      <div className="bg-[#C1DCDC]  text-slate-700 md:p-4 md:mx-3 mx-0 rounded-xl ">
             <div className=" flex items-start mb-6 ">
                          <MdAddIcCall size={'2rem'}/>
                          </div>
                          <h4 className="text-2xl font-semibold text-start">Call us</h4>
                         
                          <p className="text-sm leading-7 my-3 font-large text-start">
                              Mon to Fri from 8am-7pm</p>
                          <div className="flex items-center justify-start gap-7">
                             <button className="btn bg-white text-black hover:text-white"> Chat to connect</button>
                          </div>

                      </div>

             </div>
   
             </div>
      <div className=" w-3/4 justify-center mx-auto ">
   
        <h1 className=" text-3xl text-center bg-[#265073] p-4 rounded-t-xl text-white"> Message us!</h1>
             <form ref={form} onSubmit={sendEmail} className="card-body w-full bg-slate-300 shadow-2xl shadow-white">
              
             <div className="form-control">
             <label className="label">
               <span className="label-text ">Email</span>
             </label>
             <input type="email" name="user_email" placeholder="email" className="input input-bordered" required />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text ">Name</span>
             </label>
             <input type="text" name="user_name" placeholder="Name" className="input input-bordered" required />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text ">Message</span>
             </label>
             <textarea type="text" name="message" placeholder="message" className="input input-bordered h-24" required />
           </div>
       <input type="submit" className="bg-[#265073] text-xl text-white btn hover:text-fuchsia-700 shadow-md shadow-[#265073]  " value="Send" />
     </form>
      </div>
       </div>
       </div>
      
    );
};

export default Contact;