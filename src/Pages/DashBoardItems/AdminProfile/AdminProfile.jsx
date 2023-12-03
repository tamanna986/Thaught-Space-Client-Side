import { useContext } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { Helmet } from "react-helmet-async";


const AdminProfile = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = UseAxiosSecure()
    
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const tags = {tag: data.tag}
       
       
            
               
        axiosSecure.post('/tags', tags)
                         .then(res =>{
                            if (res.data.insertedId) {
                                console.log('Tag added to the database')
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Tag created successfully.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                
                            }
                         })
                       


    };
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Admin Profile</title>
            </Helmet>
        <SectionTitle heading = {"Admin Profile"}></SectionTitle>
            <div className="flex gap-4 items-center card shadow-2xl  py-10  relative border-t border-purple-400">
                <div className="avatar online absolute bottom-36 md:bottom-28">
                    <div className="w-16 rounded-full">
                        <img src={user.photoURL} />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                   <h1 className="font-bold text-lg text-purple-950">Name : <span className="text-black">{user.displayName}</span></h1>
                    <h1 className="font-bold text-lg text-purple-950" >Email: <span className="text-black">{user.email}</span></h1></div>
            </div>

            {/* adding tag */}
            <div>
                <SectionTitle heading = {"Add Tags"}></SectionTitle>
<form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-64 md:w-96 mx-auto my-6">
                        <label className="label">
                            <span className="label-text font-bold text-lg">Tag Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Tag Name"
                            {...register('tag', { required: true })}
                            required
                            className="input input-bordered w-full" />
                            <button className="btn mt-7 bg-purple-300 border-0 border-b-4  border-black w-full">
                        Add Tag
                    </button>
                    </div>
                   
                </form>
            </div>

        </div>

    );
};

export default AdminProfile;