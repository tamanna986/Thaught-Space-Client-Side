import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const LogIn = () => {
    const { signIn,signInWithGoogle, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state)


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

      // google log in

      const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                
                // console.log(result.user)
      
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Log In Sucessful',
                    showConfirmButton: false,
                    timer: 1500
                  })
                //      // to go to desired page using navigate
                navigate(from, { replace: true });


            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="hero min-h-screen bg-slate-950 ">
       
          <Helmet>
            <title>Thaught Space | Log In</title>
          </Helmet>
          <div className="card  w-full max-w-sm shadow-3xl bg-black my-20 ">
            <form onSubmit={handleLogin} className="card-body ">
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
                
                <input  className="btn text-black  bg-purple-300" type="submit" value="Login" />
              </div>
              <div className="divider divider-primary text-white">Or Log In with</div>
              <div className="form-control mt-6">
              <input onClick={handleGoogleSignIn}  className="btn text-black  bg-purple-300" type="submit" value="Google" />
              {/* <button  onClick={handleGoogleSignIn} className="btn text-black  bg-purple-300" >Google</button> */}
              </div>
              <h1 className="text-center mt-3 text-purple-100">Dont have an account? <span className="underline"><Link to = "/register">Register here</Link></span></h1>
            </form>
          </div>
        
      </div>
    );
};

export default LogIn;