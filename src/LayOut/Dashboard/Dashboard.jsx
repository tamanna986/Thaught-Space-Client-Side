import { FaAd, FaBookOpen, FaBookReader, FaCalendar, FaComment, FaFileInvoice, FaHome, FaList, FaSearch, FaShoppingCart, FaSoundcloud, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 md:w-72 min-h-screen bg-black text-purple-300">
            <img className="w-48 my-4" src="https://i.ibb.co/C1RcMgt/Screenshot-2023-11-24-143735.png" alt="" />
                <ul className="menu p-4 text-lg font-semibold ">
                       {
                        isAdmin? 
                        <>
                   
                         <li>
                        {/* <NavLink to="/dashboard/adminprofile"> */}
                        <NavLink to="/dashboard/adminprofile">
                            <FaHome></FaHome>
                            Admin Profile </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/allusers">
                            
                            <FaUser></FaUser>
                            Manage Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reportedactivities">
                            <FaComment></FaComment>
                            Reported Activities </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/announcement">
                            <FaFileInvoice></FaFileInvoice>
                            Make Announcement </NavLink>
                    </li>
                        </>
                         :
                        <>
                        <li>
                        <NavLink to="/dashboard">
                            <FaHome></FaHome>
                            User Dashboard </NavLink>
                            </li>

                         <li>
                        <NavLink to="/dashboard/myprofile">
                            <FaHome></FaHome>
                            My User Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addposts">
                            
                            <FaBookOpen></FaBookOpen>
                            Add Post</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/myposts">
                            <FaBookReader></FaBookReader>
                           My Post </NavLink>
                    </li>
                        </>

                       }
                    
                    
                    <div className="divider divider-primary "></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    
                </ul>
            </div>
         
            {/* dashboard content */}
            <div className="flex-1 p-8">
                
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;