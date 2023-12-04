import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import usePost from "../../../hooks/usePost";
import useVotes from "../../../hooks/useVotes";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useComments from "../../../hooks/useComments";


const MyPosts = () => {
    const {user} = useContext(AuthContext)
    const [votes] = useVotes();
    const [comments] = useComments();

   const specificUserPosts = votes.filter(specificUserPost => specificUserPost.authorEmail === user.email)
   console.log("ooooo", specificUserPosts)
    
//    const specificComment = votes.filter(specificComment => specificComment.postId === user._id)
   console.log("ooooo", specificUserPosts)


    return (
        <div className="">
            <SectionTitle  heading = {"My Posts"}></SectionTitle>

            <div className="flex justify-evenly my-4">
                
                <h2 className="text-xl text-purple-900 font-bold">Total Posts: {specificUserPosts.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr className="font-bold text-lg text-purple-950">
                            <th></th>
                            <th>Post Title</th>
                            <th>Total Votes</th>
                            <th>Comment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            specificUserPosts.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.postTitle}</td>
                                <td>{user?.upVote - user?.downVote}</td>
                                <td>
                                    <NavLink to ={`/dashboard/myposts/comment/${user._id}`}>
                                        <button className="btn bg-purple-400 text-white">Comment</button></NavLink>
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyPosts;