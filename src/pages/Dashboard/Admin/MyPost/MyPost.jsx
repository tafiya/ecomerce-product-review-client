import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useProducts from "../../../../hooks/useProducts";

const MyPost = () => {
    // const {user}= UseAuth();
     const axiosSecure = useAxiosSecure();
    const[products, refetch]=useProducts()
    console.log('All products',products)
    const handleDeleteUser = post => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/products/${post._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className=" md:p-4 rounded-lg w-full mb-80 lg:mb-auto ">
        <div className="flex justify-evenly mb-8  ">
        <h2 className="md:text-4xl text-2xl text-center text-[#265073] rounded-badge shadow-lg shadow-[#2D9596] font-bold mt-6 mb-8 bg-white p-2 md:w-2/3 w-full">My Posts</h2>

        </div>
        <div className=" overflow-x-auto bg-[#265073] md:p-6 rounded-lg shadow-lg shadow-[#2D9596] lg:mb-0  ">
            <table className="table md:w-full  ">
                {/* head */}
                <thead className="text-center text-xl font-extrabold bg-white  shadow rounded-xl" >
                    <tr>
                        
                        <th>Name</th>
                        <th> Price</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item) => <tr className=" rounded-xl shadow-lg shadow-white mb-4 hover:bg-gray-400 text-white" key={item._id}>
                          
                            <td className="text-lg text-center font-semibold ">
                            {item.name}
                            </td>
                            <td className=" font-semibold  md:text-lg text-center" >
                            {item.price}
                            </td>
                            <td className=" md:text-lg font-semibold text-center"> {item.rating}</td>
                            <th className=" flex justify-center items-center">
                            <button    onClick={() => handleDeleteUser(item._id)}className="flex items-center rounded-full bg-red-500 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-red-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2 h-6 w-6">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> </svg>
                                            Delete
                                        </button>
                             
                            </th>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyPost;

