import { useQuery } from "react-query";
import useAxiosPublic from "./UseAxiosPublic";


const useReview = () =>{
  const axiosPublic = useAxiosPublic();


 const {data: reviews = [], isPending: loading, refetch} = useQuery({
     queryKey: ['reviews'], 
     queryFn: async() =>{
         const res = await axiosPublic.get('/reviews');
         return res.data;
     }
 })


 return [reviews,loading, refetch]
};

export default useReview;