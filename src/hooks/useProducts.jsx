
import { useQuery } from "react-query";
import useAxiosPublic from "./UseAxiosPublic";



const useProducts = () => {
     const axiosPublic = useAxiosPublic();
 

    const {data: products = [], isPending: loading, refetch} = useQuery({
        queryKey: ['products'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/products');
            return res.data;
        }
    })


    return [products,loading, refetch]
}

export default useProducts;