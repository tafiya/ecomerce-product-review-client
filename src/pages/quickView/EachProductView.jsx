import { FaStar } from "react-icons/fa";
import { FacebookShareButton } from "react-share";
import { LucideShare2 } from "lucide-react";
import { FaCircleUser } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import useReview from "../../hooks/useReview";
const EachProductView = ({NewItem}) => {
    const { register,handleSubmit,reset} = useForm();
    const {_id,image,name,price,category,brand,rating,description,specification}=NewItem;
    const shareUrl = `http://localhost:5300/posts/${_id}`;
    const id=_id;
    const axiosPublic = useAxiosPublic();
    const [reviews] = useReview();
    const Accessories =reviews.filter(item=>item?.reviewId === id);
    console.log('reviews',reviews)
    console.log('id',id)
  console.log('Accessories',Accessories)
    const onSubmit = async (data) => {
    
        const currentTime =new Date() ;
    
            // now send the post item data to the server with the image url
            const postReview = {
                reviewId:id,
                UserName: data.name,
               productRating: data.rating,
               feedbackDescription: data.feedback,
                timestamp:currentTime.getTime()
            }
        
            // 
            const postRes = await axiosPublic.post('/reviews', postReview);
          //  console.log(postRes.data)
            if(postRes.data.insertedId){
                //show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.post} is added to the post.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        
    };
    return (
        <div className="card lg:card-side lg:h-[520px] lg:w-1/2 bg-base-100 shadow-xl">
        <div className=" lg:w-1/2">
    <img src={image} className="lg:h-[520px] lg:w-96" alt="" />
        </div> 
      <div className="card-body  lg:w-1/2">
        <div className=" flex justify-between mb-4">
        <div className="flex gap-2   ">
        <h2 className="card-title">{name} </h2>
        <h1 className=" text-base border border-[#97e7e7] rounded-lg p-1 text-[#95e2e2]">{category}</h1>
        </div>
                    <div className=" flex items-center gap-1">
                        {rating}
                        <FaStar color="red" />
                    </div>
                </div>
        <h1>{description}{description}{description}</h1>
        <h1> <span className="text-lg font-semibold text-[#52c2c2]">Band :  </span>{brand}</h1>
        <h1> <span className="text-lg font-semibold text-[#52c2c2]">Specification :  </span>{specification}</h1>
        <div className="card-actions justify-start mt-6">
          <button className="btn ">${price}</button>
        </div>
        <div className=" mt-6 flex justify-between">
        <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Give Review</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                        <form className="rounded-xl   shadow-lg shadow-[#2D9596] border-white sm:p-6  p-4 grid bg-[#265073]" onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex items-center justify-center">
            </div>
                <div className="flex justify-center sm:flex-row flex-col gap-6">
                <div className="form-control sm:w-2/3 flex  my-6">
                    <label className="label">
                        <span className="label-text text-lg font-semibold text-white">Your Name*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        {...register('name', { required: true })}
                        required
                        className="input input-bordered w-full shadow-lg shadow-[#2D9596]" />
                </div>
                    
                </div>
                <div className="flex  justify-center sm:flex-row flex-col gap-6">
                    <div className="form-control sm:w-2/3 flex  my-6">
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-white">Rating*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Rating"
                            {...register('rating', { required: true })}
                            className="input input-bordered w-full shadow-lg shadow-[#2D9596]" />
                    </div>

                </div>
                <div className="flex justify-center sm:flex-row flex-col gap-6">
                <div className="form-control sm:w-2/3 flex  my-6">
                    <label className="label">
                        <span className="label-text text-lg font-semibold text-white">Your feedback</span>
                    </label>
                    <textarea {...register('feedback')} className="textarea textarea-bordered h-24 shadow-lg shadow-[#2D9596]" placeholder="Your feedback"></textarea>
                </div>

                </div>
               <div className="flex justify-center sm:flex-row flex-col gap-6" >
                <div className="form-control sm:w-1/3 flex  my-6">
                <button className="btn ">
               review
                </button>

                </div>
               

               </div>
               
            </form>
                          {/* <form action="" onSubmit={handlereview} className=" gap-6" >
                          <input type="text" placeholder="Type here"  name="name" className="input input-bordered w-full max-w-xs" />
                          <input type="text" placeholder="Type rating here"  name="rating" className="input input-bordered w-full max-w-xs" />
                          <textarea className="textarea textarea-bordered" placeholder="Bio" name="review"></textarea>
                          <input type="submit" placeholder="Type rating here"   value="post" className="input input-bordered w-full max-w-xs" />
                           
                          </form> */}
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
            
           
            <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>See Reviews</button>
<dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box ">
   {
    Accessories.map(item=><div key={item._id} className="card w-96 bg-base-100 shadow-xl mb-5">
    <div className="card-body">
      <h2 className="card-title"><FaCircleUser /> {item.UserName}</h2>
      <p>{item.feedbackDescription}</p>
      <div className="card-actions justify-start">
      <div className=" flex items-center gap-1">
      {item.productRating}
                        <FaStar color="red" />
                    </div>
    
      </div>
    </div>
  </div>)
   }
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
            <FacebookShareButton url={shareUrl}>
                           
                           <LucideShare2 size={30} />
                        </FacebookShareButton>
        </div>
  
      </div>
    </div>
    );
};

export default EachProductView;