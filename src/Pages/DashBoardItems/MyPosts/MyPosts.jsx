import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import usePost from "../../../hooks/usePost";
import useVotes from "../../../hooks/useVotes";
import { AuthContext } from "../../../Provider/AuthProvider";


const MyPosts = () => {
    const {user} = useContext(AuthContext)
    const [votes] = useVotes();
    const [post] = usePost();
    // console.log(votes, post)
   
  
    
    
  
        
   

    // const myPostsVotes = votes.filter(myPostsVote => myPostsVote.postId === Posts._id)
    // console.log(myPostsVotes)

    return (
        <div className="">
            <SectionTitle  heading = {"My Posts"}></SectionTitle>
        </div>
    );
};

export default MyPosts;