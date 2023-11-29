import { FaAd, FaBookOpen, FaBookReader, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-purple-300">
                <ul className="menu p-4 text-lg font-semibold ">
                    <li>
                        <NavLink to="/dashboard/myprofile">
                            <FaHome></FaHome>
                            My Profile</NavLink>
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
                    
                    
                    <div className="divider"></div>
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