import { Link } from "react-router-dom";
import { AiOutlineBell } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const NavbarLayOut = ({children}) => {

  const { user, logOut } = useContext(AuthContext)
  const handleSignOut = () => {
    logOut();
  }
    const navItems = <>
    <li><Link to="/">Home</Link> </li>
    <li><Link to="/membership">Membership</Link></li>
    <li><Link to="/"><AiOutlineBell className="mt-2"></AiOutlineBell></Link></li>
    
    
    { user?.email ?  <>
        
        <li><button onClick={handleSignOut}>Log out</button></li>
        
    </> 
    : 
    <>
      <li><Link to="/login">Join Us</Link></li>
    </>
   }
    
   

   
</>

    return (
        <div className="">
                   <div className="drawer  w-full ">
     <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
     <div className="drawer-content flex flex-col">
       {/* Navbar */}
       <div className="w-full navbar bg-black text-purple-200 ">
         <div className="flex-none lg:hidden">
           <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square  hover:bg-purple-400">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
           </label>
         </div> 
         <div className="flex-1 px-2 mx-2">
           
           <img className="w-52" src="https://i.ibb.co/C1RcMgt/Screenshot-2023-11-24-143735.png" alt="" />
         </div>
         <div className="flex-none hidden lg:block bg-black">
           <ul className="menu menu-horizontal text-purple-200 text-lg">
             {/* Navbar menu content here */}
             {navItems}
             {/* {
               user && <img className="w-10 rounded-full mx-1 lg:mx-2" src={user.photoURL} alt={user.displayName}
              //  title={user.displayName}
                />
             } */}
     {
    //   user && <li>
    //   <details>
    //     <summary>
        
    //         <img className="w-10 rounded-full mx-1 lg:mx-2 " src={user.photoURL} alt={user.displayName}
    //         //  title={user.displayName}
    //           />
           
    //     </summary>
    //     <ul className="p-10 bg-base-100 rounded-t-none">
    //         <li><a>Link 1</a></li>
    //         <li><a>Link 2</a></li>
    //       </ul>
    //   </details>
    // </li>
    user && <ul>
<li>
          <a ><img className="w-10 rounded-full mx-1 lg:mx-2 " src={user.photoURL} 
          alt={user.displayName} /></a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
    </ul>
     }
           </ul>
         </div>
       </div>
       {/* Page content here */}
       {children}
     </div> 
     <div className="drawer-side">
       <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
       <ul className="menu p-4 w-80 min-h-full bg-black text-purple-200 text-lg">
         {/* Sidebar content here */}
         {navItems}
         {
               user && <img className="w-10 rounded-full mx-1 lg:mx-2" src={user.photoURL} alt={user.displayName}
              //  title={user.displayName}
                />
             }
         
       </ul>
     </div>
   </div>
        </div>
       );
};

export default NavbarLayOut;