
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAllUsers from "../../../hooks/useAllUsers";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import MyInfo from "./MyInfo";
import SilverProfile from "./SilverProfile";


const MyProfile = () => {
    const [Allusers, loading, refetch] = useAllUsers();
    const [currentUser , setCurrentUser] = useState([]);
    const { user } = useContext(AuthContext);
    const [badge, setBadge] = useState('')
    

    // const myInfo = allUsers.filter(specificUser =>specificUser.email === user.email )
    // if (!loading && Array.isArray(Allusers) && Allusers.length > 0) {
    //     const filteredUsers = Allusers.filter(presentUser =>presentUser.email === user.email); 

    //     // console.log("Filtered Users", filteredUsers);
    //     const isGolden = filteredUsers.some(user => user.status === "golden");

    //     if (isGolden) {
    //         setBadge("golden");
    //     }


    // }

    useEffect(() => {
        if (!loading && Array.isArray(Allusers) && Allusers.length > 0) {
            const filteredUsers = Allusers.filter(presentUser => presentUser.email === user.email);
            setCurrentUser(filteredUsers)
            const isGolden = filteredUsers.some(user => user.status === "golden");

            if (isGolden) {
                setBadge("golden");
            }

            
        }
    }, [Allusers, loading, user.email]);

   


    return (
        <div className="space-y-20">
            <SectionTitle heading={"My Profile"}></SectionTitle>
            {badge === "golden" ?
                <>

                  {
                  currentUser.map(info => 
                    <MyInfo
                    key = {info._id}
                    info = {info}
                    
                    ></MyInfo>
                    )
                  
                  }

                    <button disabled className="btn mt-2 bg-purple-300 border-0 border-b-4 text-lg border-black w-full">
                        Already Paid
                    </button>

                    {/* {
                    badge === "golden" ?
                        <button disabled className="btn mt-2 bg-purple-300 border-0 border-b-4 text-lg border-black w-full">
                            Already Paid
                        </button>
                        :
                        <Link to="/dashboard/payment">
                            <button className="btn mt-2 bg-purple-300 border-0 border-b-4 text-lg border-black w-full">
                                Pay
                            </button>
                        </Link>
                } */}


                </>
                :
                <>
                {
                  currentUser.map(info => 
                    <SilverProfile
                    key = {info._id}
                    info = {info}
                    
                    ></SilverProfile>
                    )
                  
                  }
                
                    <div className="w-52 md:w-80  card shadow-xl p-5 mx-auto">
                        <h1 className="text-sm text-purple-950 font-bold ">Proceed to payment to get the Golden Badge and avail the opportunity to post unlimited  </h1>
                        <h2 className="text-sm text-black font-bold mt-3">Amount : $1000</h2>

                        <Link to="/dashboard/payment">
                            <button className="btn mt-2 bg-purple-300 border-0 border-b-4 text-lg border-black w-full">
                                Pay
                            </button>
                        </Link>
                    </div>
                </>
            }
        </div>
    );
};

export default MyProfile;