import { FaAd, FaBookOpen, FaBookReader, FaCalendar, FaComment, FaHome, FaList, FaSearch, FaShoppingCart, FaSoundcloud, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
    const isAdmin = true;
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-black text-purple-300">
                <ul className="menu p-4 text-lg font-semibold ">
                       {
                        isAdmin? 
                        <>
                   
                         <li>
                        <NavLink to="/dashboard/myprofile">
                            <FaHome></FaHome>
                            Admin Profile </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addposts">
                            
                            <FaUser></FaUser>
                            Manage Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/myposts">
                            <FaComment></FaComment>
                            Reported Comments/Activities </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/myposts">
                            <FaSoundcloud></FaSoundcloud>
                            Make Announcement </NavLink>
                    </li>
                        </>
                         :
                        <>
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