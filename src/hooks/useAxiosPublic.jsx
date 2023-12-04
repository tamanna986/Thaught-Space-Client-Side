import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://thaught-space-server.vercel.app'
   
})


const useAxiosPublic = () => {
   
        return axiosPublic;
    
};

export default useAxiosPublic;