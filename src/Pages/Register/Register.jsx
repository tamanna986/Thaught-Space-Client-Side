import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile info updated')
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');

                    })
                    .catch(error => console.log(error))
            })
    };

    // const handleRegister = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const photo = form.image.value;
    //     const password = form.password.value
    // }
    return (
        <div className="hero min-h-screen bg-slate-950 ">
            <Helmet>
                <title>Thaught Space | Register</title>
            </Helmet>

            <div className="card  w-full max-w-sm shadow-3xl bg-black my-20 ">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                    <img className="w-14 rounded-full mx-auto" src="https://i.ibb.co/q17cgRQ/2.png" alt="" />
                    <div className="form-control text-lg ">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text"  {...register("name", { required: true })} placeholder="Name" name="name" className="input input-bordered " required />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>
                    <div className="form-control text-lg ">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="email" name="email" className="input input-bordered " required />{errors.email && <span className="text-red-600">Email is required</span>}
                    </div>
                    <div className="form-control text-lg ">
                        <label className="label">
                            <span className="label-text text-white">Image Url</span>
                        </label>
                        <input type="text" {...register("photoURL", { required: true })} placeholder="Image Url" name="photoURL" className="input input-bordered " required />
                        {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password"
                        {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} 
                        placeholder="password" name="password" className="input input-bordered " required />
                         {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-purple-300">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn text-black  bg-purple-300" type="submit" value="Register" />
                    </div>
                   
                 
                    <h1 className="mt-2 text-center text-purple-100">Already have an account? <span className="underline"><Link to="/login">Login here</Link></span></h1>
                </form>
            </div>

        </div>
    );
};

export default Register;