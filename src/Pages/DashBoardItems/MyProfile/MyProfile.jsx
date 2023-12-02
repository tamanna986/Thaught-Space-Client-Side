
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const MyProfile = () => {
    
    return (
        <div >
        <SectionTitle  heading = {"My Profile"}></SectionTitle>
        <div className="w-52  card shadow-xl p-5">
            <h1 className="text-sm text-purple-950 font-bold ">Proceed to payment to get the Golden Badge and avail the opportunity to post unlimited  </h1>
            <h2 className="text-sm text-black font-bold mt-3">Amount : $1000</h2>
            <Link to = "/dashboard/payment"><button className="btn mt-2 bg-purple-300 border-0 border-b-4 text-lg border-black w-full">
                       Pay
                    </button></Link>
        </div>
    </div>
    );
};

export default MyProfile;