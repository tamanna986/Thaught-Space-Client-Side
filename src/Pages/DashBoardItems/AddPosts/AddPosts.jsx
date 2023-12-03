import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import useTag from "../../../hooks/useTag";
import Button from "../../../components/Button/Button";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import usePost from "../../../hooks/usePost";
import { NavLink } from "react-router-dom";
import useAllUsers from "../../../hooks/useAllUsers";



const AddPosts = () => {
    const [tags] = useTag();
    const [Allusers] = useAllUsers();
    const[status, setStatus] = useState([])
    const {user} = useContext(AuthContext)
    console.log("21",user, user.name, user.photo)
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = UseAxiosSecure();
    
    const [posts, ,refetch] = usePost();
    console.log(posts)
    // getting matching users email wise posts
    const post = posts.filter( post => post.authorEmail === user.email)
    console.log(post.length, "32 line post er length")
 
// matching users email\

const userStatus = Allusers.filter(aUser => aUser.email === user.email)
// setStatus(userStatus)
console.log("user sttus", userStatus)


//   useEffect(() =>{
//     const userStatus = Allusers.filter(aUser => aUser.email === user.email)
//     setStatus(userStatus)
//    console.log("45555 line 48", status)
//   },[])





    const onSubmit = async (data) => {
     
    // Getting the current date and format it as DD-MM-YYYY
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;

        

        const postItem = {
            authorName: data.authorName,
            authorEmail: data.authorEmail,
            postTitle: data.postTitle,
            postDescription: data.postDescription,
            category: data.category,
            upVote: parseFloat(data.upVote),
            downVote: parseFloat(data.downVote),
            image: data.photoURL,
            postTime: formattedDate
        }
        console.log(postItem)

        const addedPost = await axiosSecure.post('/posts', postItem);
        console.log(addedPost.data)
        if(addedPost.data.insertedId){
            // show success popup
            reset();
           Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.postTitle} is added to Posts. G .`,
                showConfirmButton: false,
                timer: 1500
              });
              refetch();
        }


    };

    return (
        <div >
            <SectionTitle heading = {"Add Posts"}></SectionTitle>
          
            <div>
                {
                   userStatus[0]?.status === "golden" ?

                    <>
                     <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-purple-950">Author Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Author Name"
                            defaultValue={user.displayName}
                            {...register('authorName', { required: true })}
                            required
                            className="input input-bordered w-full"
                            readOnly />
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-purple-950">Author Email*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Author Email"
                            defaultValue={user.email}
                            {...register('authorEmail', { required: true })}
                            required
                            className="input input-bordered w-full" 
                            readOnly/>
                    </div>

                    <div className="form-control text-lg ">
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-purple-950">Image Url</span>
                        </label>
                        <input type="text" {...register("photoURL", { required: true })} placeholder="Image Url" name="photoURL"
                        defaultValue={user.photoURL}
                         className="input input-bordered "
                         readOnly
                          required />
                        
                    </div>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-purple-950">Post Title*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Post Title"
                            {...register('postTitle', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-purple-950">Post Description</span>
                        </label>
                        <textarea {...register('postDescription')} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                    </div>

                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-purple-950">Tag*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                {
                                    tags.map(tag => <option 
                                        key = {tag._id}
                                        value={tag.tag}>
                                            {tag.tag}
                                            </option>)
                                }
                                
                            </select>
                        </div>

                        {/* upvote */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-purple-950">Up Vote</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={0}
                                placeholder="Up Vote"
                                {...register('upVote', { required: true })}
                                className="input input-bordered w-full"
                                readOnly />
                        </div>
                        {/* downvote */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-purple-950">Down Vote</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={0}
                                placeholder="Down Vote"
                                {...register('downVote', { required: true })}
                                className="input input-bordered w-full"
                                readOnly />
                        </div>

                    </div>
                  
                        <Button btnName = {"Add Post"}></Button>
                    
                </form>
                    </>
                    :

                    <>
         {
            post.length<5 ? 
           
            <>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-purple-950">Author Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Author Name"
                            defaultValue={user.displayName}
                            {...register('authorName', { required: true })}
                            required
                            className="input input-bordered w-full"
                            readOnly />
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-purple-950">Author Email*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Author Email"
                            defaultValue={user.email}
                            {...register('authorEmail', { required: true })}
                            required
                            className="input input-bordered w-full" 
                            readOnly/>
                    </div>

                    <div className="form-control text-lg ">
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-purple-950">Image Url</span>
                        </label>
                        <input type="text" {...register("photoURL", { required: true })} placeholder="Image Url" name="photoURL"
                        defaultValue={user.photoURL}
                         className="input input-bordered "
                         readOnly
                          required />
                        
                    </div>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-purple-950">Post Title*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Post Title"
                            {...register('postTitle', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-purple-950">Post Description</span>
                        </label>
                        <textarea {...register('postDescription')} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                    </div>

                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-purple-950">Tag*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                {
                                    tags.map(tag => <option 
                                        key = {tag._id}
                                        value={tag.tag}>
                                            {tag.tag}
                                            </option>)
                                }
                                
                            </select>
                        </div>

                        {/* upvote */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-purple-950">Up Vote</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={0}
                                placeholder="Up Vote"
                                {...register('upVote', { required: true })}
                                className="input input-bordered w-full"
                                readOnly />
                        </div>
                        {/* downvote */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-purple-950">Down Vote</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={0}
                                placeholder="Down Vote"
                                {...register('downVote', { required: true })}
                                className="input input-bordered w-full"
                                readOnly />
                        </div>

                    </div>
                    <Button btnName = {"Add Post"}></Button>
                
                     {/* {
                        post.length<5?
                        <Button btnName = {"Add Post"}></Button>

                        :
                        <div>
                            <h1 className="text-2xl md:tex-3xl text-red-600 font-semibold text-center mt-10 mb-5"> Your post Limit has been crossed! Pay to earn golden badge and post unlimited </h1>
                       <div className="w-32 mx-auto"> <NavLink  to = "/dashboard/myprofile"><button className="btn bg-purple-900 text-white w-full"> Pay </button></NavLink></div>
                        </div>
                     } */}
                    
                </form>
            
            </>
            :
          <>
          <div>
                            <h1 className="text-2xl md:tex-3xl text-red-600 font-semibold text-center mt-20 mb-5"> Your post Limit has been crossed! Pay to earn golden badge and post unlimited </h1>
                       <div className="w-48 mx-auto"> <NavLink  to = "/dashboard/payment"><button className="btn bg-purple-900 text-white w-full"> Become a Member </button></NavLink></div>
                        </div>
          
          </>
         }
                    </>

                }
            </div>
        </div>
     
    );
};

export default AddPosts;