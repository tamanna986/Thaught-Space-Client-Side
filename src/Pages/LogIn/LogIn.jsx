

const LogIn = () => {

    const handleLogIn = (e)=>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value
    }
    return (
        <div className="hero min-h-screen bg-slate-950 ">
       
          
          <div className="card  w-full max-w-sm shadow-3xl bg-black ">
            <form onSubmit={handleLogIn} className="card-body ">
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
            </form>
          </div>
        
      </div>
    );
};

export default LogIn;