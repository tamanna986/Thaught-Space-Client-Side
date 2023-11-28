import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Register = () => {
    const handleRegister = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.image.value;
        const password = form.password.value
    }
    return (
        <div className="hero min-h-screen bg-slate-950 ">
       <Helmet>
            <title>Thaught Space | Register</title>
          </Helmet>
          
        <div className="card  w-full max-w-sm shadow-3xl bg-black my-20 ">
          <form onSubmit={handleRegister} className="card-body ">
            <img className="w-14 rounded-full mx-auto" src="https://i.ibb.co/q17cgRQ/2.png" alt="" />
            <div className="form-control text-lg ">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input type="email" placeholder="Name" name = "name" className="input input-bordered " required />
            </div>
            <div className="form-control text-lg ">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input type="email" placeholder="email" name = "email" className="input input-bordered " required />
            </div>
            <div className="form-control text-lg ">
              <label className="label">
                <span className="label-text text-white">Image Url</span>
              </label>
              <input type="text" placeholder="Image Url" name = "image" className="input input-bordered " required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input type="password" placeholder="password" name = "password" className="input input-bordered " required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-purple-300">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-black  bg-purple-300">Register</button>
            </div>
            <div className="divider divider-primary text-white">Or Register  with</div>
            <div className="form-control mt-6">
              <button className="btn text-black  bg-purple-300">Google</button>
            </div>
            <h1 className="mt-2 text-center text-purple-100">Already have an account? <span className="underline"><Link to = "/login">Login here</Link></span></h1>
          </form>
        </div>
      
    </div>
    );
};

export default Register;