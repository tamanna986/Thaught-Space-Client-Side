import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useVotes = () => {
   const axiosPublic = useAxiosPublic();
    const {data: votes = [], isPending: loading, refetch} = useQuery({
        queryKey: ['votes'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/votes');
            return res.data;
        }
    })
    return [votes, loading, refetch]
};

export default useVotes;