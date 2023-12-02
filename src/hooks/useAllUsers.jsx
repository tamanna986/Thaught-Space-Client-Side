import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllUsers = () => {
    const axiosPublic = useAxiosPublic();
    const {data: Allusers = [], isPending: loading, refetch} = useQuery({
        queryKey: ['Allusers'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/users');
            return res.data;
        }
    })
    return [Allusers, loading, refetch]
};

export default useAllUsers;