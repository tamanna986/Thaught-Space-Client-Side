import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFilteredPosts = (categoryName = '') => {
    console.log(categoryName)
    const axiosPublic = useAxiosPublic();
    const { data: posts = [], isPending: loading, refetch } = useQuery({
        queryKey: ['posts', categoryName],
        queryFn: async () => {
            const url = categoryName ? `/posts?category=${categoryName}` : '/posts';
            const res = await axiosPublic.get(url);
            return res.data;
        },
    });
    return [posts, loading, refetch];
};

export default useFilteredPosts;
