import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const LogIn = () => {

    const handleLogIn = (e)=>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value
    }
    return (
        <div className="hero min-h-screen bg-slate-950 ">
       
          <Helmet>
            <title>Thaught Space | Log In</title>
          </Helmet>
          <div className="card  w-full max-w-sm shadow-3xl bg-black my-20 ">
            <form onSubmit={handleLogIn} className="card-body ">
            <img className="w-14 rounded-full mx-auto" src="https://i.ibb.co/q17cgRQ/2.png" alt="" />
              <div className="form-control text-lg ">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input type="email" placeholder="email" name = "email" className="input input-bordered " required />
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
                <button className="btn text-black  bg-purple-300">Login</button>
              </div>
              <div className="divider divider-primary text-white">Or Log In with</div>
              <div className="form-control mt-6">
                <button className="btn text-black  bg-purple-300">Google</button>
              </div>
              <h1 className="text-center mt-3 text-purple-100">Dont have an account? <span className="underline"><Link to = "/register">Register here</Link></span></h1>
            </form>
          </div>
        
      </div>
    );
};

export default LogIn;