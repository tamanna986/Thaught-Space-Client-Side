import { useContext } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const AdminProfile = () => {
    const { user } = useContext(AuthContext)
    
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const tags = {tag: data.category}
        console.log(data.category);
       
            
               
                        //  axiosPublic.post('/users', userInfo)
                        //  .then(res =>{
                        //     if (res.data.insertedId) {
                        //         console.log('Tag added to the database')
                        //         reset();
                        //         Swal.fire({
                        //             position: 'top-end',
                        //             icon: 'success',
                        //             title: 'Tag created successfully.',
                        //             showConfirmButton: false,
                        //             timer: 1500
                        //         });
                        //         navigate('/');
                        //     }
                        //  })
                       


    };
    return (
        <div>
        <SectionTitle heading = {"Admin Profile"}></SectionTitle>
            <div className="flex gap-4 items-center card shadow-2xl w-64 px-6 py-10  relative border-t border-purple-400">
                <div className="avatar online absolute bottom-28">
                    <div className="w-16 rounded-full">
                        <img src={user.photoURL} />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                   <h1 className="font-bold text-purple-950">{user.displayName}</h1>
                    <h1 className="font-bold text-purple-950" >{user.email}</h1></div>
            </div>

            {/* adding category */}
            <div>
                <SectionTitle heading = {"Add Tags"}></SectionTitle>
<form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className=" w-64 md:w-96 mx-auto">
                        {/* category */}
                        <div className="form-control w-64 md:w-96 mx-auto my-6">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Tag*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="GlobalWarming">GlobalWarming</option>
                                <option value="HumanRights">HumanRights</option>
                                <option value="Social">Social</option>
                                <option value="Political">Political</option>
                                <option value="Iconomic">Iconomic</option>
                            </select>
                        </div>
                        <button className="btn bg-purple-300 border-0 border-b-4  border-black w-full">
                        Add Tag
                    </button>
                    </div>
                  
                    
                </form>
            </div>

        </div>

    );
};

export default AdminProfile;