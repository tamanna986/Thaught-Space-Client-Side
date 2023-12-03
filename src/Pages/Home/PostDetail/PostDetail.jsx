import { NavLink, useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaComment } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { FaShare } from "react-icons/fa6";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";
import "./Share/share.css";
import { WhatsappIcon, WhatsappShareButton } from "react-share";
const PostDetail = () => {
    const {_id, authorName, authorEmail, postTitle,postDescription,category,upVote,downVote,image,postTime} = useLoaderData();
    const {user} = useContext(AuthContext)

    const shareUrl = `http://localhost:5173/post/${_id}`;
   


    return (
        
 <div className="mb-20 mx-10 md:mx-20">
    <SectionTitle heading = {"Post Details"}></SectionTitle>
 <div>
 <div className="flex gap-4 items-center card shadow-2xl  py-10   border-t border-purple-400 h-full px-5 mt-10 ">

<div>
<div className="flex gap-3 items-center">
<div className="avatar rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
    <div className="w-10 h-10 rounded-full">
        <img src={image} />
    </div>
</div>
<h2 className="card-title text-sm md:text-base font-bold text-purple-950 h-20">{authorName}</h2>


</div>
<h2 className="card-title text-sm md:text-base font-bold text-purple-950 h-20">{postTitle}</h2>
    <div className="flex justify-between ">
        <p>#{category}</p>
        <h2 className="font-semibold"><span className="text-purple-800"></span> {postTime}</h2>
    </div>
    <h2 className="mt-5 text-purple-950 ">{postDescription}</h2>
  {
    user ?
    <>
 
 <div className="card-actions justify-around border-0 border-t-2 border-5 border-purple-950  mt-5 -mx-5 py-3">
    <form className="flex gap-1 items-center">
    <FaComment />
        <input className="outline-none border-0 border-b-1 border-purple-400" type="text" name="" id="name" placeholder="Type a comment here." />
    </form>
    <SlLike />
    <SlDislike />
    <div className="">
<div className="Demo__some-network">
        <WhatsappShareButton
          url={shareUrl}
          title={postTitle}
          separator=":: "
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon size={24} round />
        </WhatsappShareButton>
      </div>
</div>

    </div>

    
    </>
    :

    <>
        <NavLink to = "/login">
 <div className="card-actions justify-around border-0 border-t-2 border-5 border-purple-950  mt-5 -mx-5 py-3">
    <div className="flex gap-1 items-center"><FaComment /><h2 className="text-purple-950 font-semi-bold ">  Comments</h2></div>
    <SlLike />
    <SlDislike />
    <FaShare />

    </div>
 </NavLink>
    </>
  }
</div>
</div>
 </div>
 </div>
    );
};

export default PostDetail;