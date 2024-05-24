import useReview from "../../../../hooks/useReview";


const AllReview = () => {
    const [reviews] = useReview();
    return (
        <div className=" md:p-4 rounded-lg w-full mb-80 lg:mb-auto ">
        <div className="flex justify-evenly mb-8  ">
        <h2 className="md:text-4xl text-2xl text-center text-[#265073] rounded-badge shadow-lg shadow-[#2D9596] font-bold mt-6 mb-8 bg-white p-2 md:w-2/3 w-full">All Reviews</h2>

        </div>
        <div className=" overflow-x-auto bg-[#265073] md:p-6 rounded-lg shadow-lg shadow-[#2D9596] lg:mb-0  ">
            <table className="table md:w-full  ">
                {/* head */}
                <thead className="text-center text-xl font-extrabold bg-white  shadow rounded-xl" >
                    <tr>
                        
                        <th>Name</th>
                        <th> Feedback</th>
                        <th>Rating</th>
               
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map((item) => <tr className=" rounded-xl shadow-lg shadow-white mb-4 hover:bg-gray-400 text-white" key={item._id}>
                          
                            <td className="text-lg text-center font-semibold ">
                            {item.UserName}
                            </td>
                            <td className=" font-semibold  md:text-lg text-center" >
                            {item.feedbackDescription}
                            </td>
                            <td className=" md:text-lg font-semibold text-center"> {item.productRating}</td>
                       
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllReview;