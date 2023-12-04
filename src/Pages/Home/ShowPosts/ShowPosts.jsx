import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Button } from "keep-react";
import { NavLink } from "react-router-dom";
import useComments from "../../../hooks/useComments";
import useVotes from "../../../hooks/useVotes";


const ShowPosts = ({ aPost }) => {
   
    const [votes, , refetch] = useVotes();
    // console.log("votes", votes)
    const [comments] = useComments();
    // console.log(comments)

    
    const totalSpecificComments = comments.filter(totalSpecificComment => totalSpecificComment.postId === aPost._id)
    
    const totalVotes = votes.filter(totalVote => totalVote._id === aPost._id)
    refetch();

    console.log(totalVotes, "total vote")
    return (

       <NavLink to = {`/post/${aPost._id}`}>
         <div className="flex gap-4 items-center card shadow-2xl  py-10  relative border-t border-purple-400 h-56 px-5 mt-10 ">
            <div className="avatar  absolute bottom-48">
                <div className="w-12 rounded-full">
                    <img src={aPost.image} />
                </div>
            </div>
            <div>

             
                    <h2 className="card-title text-sm md:text-base font-bold text-purple-950 h-20">{aPost.postTitle}</h2>
               
                <div className="flex justify-between mt-2">
                    <p>#{aPost.category}</p>
                    <h2 className="font-semibold"><span className="text-purple-800"></span> {aPost.postTime}</h2>
                </div>

                <div className="card-actions justify-around border-0 border-t-2 border-5 border-purple-950  mt-5 -mx-5 py-3">
                    <h2 className="text-purple-950 font-semibold ">{totalSpecificComments.length} Comments</h2>
                    <h2 className="text-purple-950 font-semibold ">{totalVotes[0]?.upVote - totalVotes[0]?.downVote} Votes</h2>

                </div>
            </div>
        </div>
       </NavLink>

    );
};

export default ShowPosts;