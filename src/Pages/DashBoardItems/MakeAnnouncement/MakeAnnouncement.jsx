import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import Button from "../../../components/Button/Button";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const MakeAnnouncement = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = UseAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const announcement = {
                AuthorName: data.authorName,
                title: data.title,
                description: data.description,
                image: res.data.data.display_url
            }
            // 
            const newAnnouncement = await axiosSecure.post('/announcement', announcement);
            console.log(newAnnouncement.data)
            if(newAnnouncement.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.title} is added to the announcement.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log( 'with image url', res.data);
    };

    return (
        <div>
             <Helmet>
                <title>Bistro Boss | manage Users</title>
            </Helmet>
            <div>
            <h2 className="w-80 mx-auto mt-10  text-2xl text-black font-semibold">Make Announcement</h2>
            
            <p className=" mb-10 mx-auto w-48 border-b-4  border-purple-950"></p>
        </div>
        <div>
            
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text font-bold text-purple-950 text-lg">Author Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Author Name"
                            {...register('authorName', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text font-bold text-purple-950 text-lg">Title*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Title"
                            {...register('title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-purple-950 text-lg">Description</span>
                        </label>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                    <label className="label">
                            <span className="label-text font-bold text-purple-950 text-lg">Author Image</span>
                        </label>
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                   

                    <Button btnName={"Add Announcement"}></Button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default MakeAnnouncement;