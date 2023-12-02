import { Link } from "react-router-dom";
import { AiOutlineBell } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAnnouncement from "../../hooks/useAnnouncement";



const NavbarLayOut = ({children}) => {
  const [announcements] = useAnnouncement();
  const { user, logOut } = useContext(AuthContext)
  const handleSignOut = () => {
    logOut();
  }
    const navItems = <>
    <li><Link to="/">Home</Link> </li>
    <li><Link to="/membership">Membership</Link></li>
    <li><Link to="/"><AiOutlineBell className="mt-2"></AiOutlineBell><p className="-ml-2">{announcements.length}</p></Link></li>
    
    
    { user?.email ?  <>
        
      <div className="dropdown mr-2  md:mr-14">
  <label tabIndex={0} className="">
  <img className="w-10 rounded-full mx-1 lg:mx-2" src={user.photoURL} alt={user.displayName}
   
      />
  </label>
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-32 ">
    
      
      <div className="space-y-5 py-3 px-1">
      <p className="text-purple-500 font-semibold font-lg">{user.displayName}</p>
      <p><Link className="text-purple-500 font-semibold font-lg" to ="/dashboard">Dashboard</Link></p>
      <li ><button className=" font-semibold btn bg-purple-300 border-0 border-b-4 border-purple-800 p-3 text-white font-lg " onClick={handleSignOut}>Log out</button></li>

      </div>      
    

    
  </ul>
</div>
        
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
           <ul className="menu menu-horizontal text-purple-200 text-lg ">
             {/* Navbar menu content here */}
             {navItems}
            

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
        
         
       </ul>
     </div>
   </div>
        </div>
       );
};

export default NavbarLayOut;