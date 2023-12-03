
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAllUsers from "../../../hooks/useAllUsers";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import MyInfo from "./MyInfo";
import SilverProfile from "./SilverProfile";
import usePost from "../../../hooks/usePost";
import MyPost from "./MyPost/MyPost";


const MyProfile = () => {
    const [Allusers, loading, refetch] = useAllUsers();
    const [currentUser , setCurrentUser] = useState([]);
    const { user } = useContext(AuthContext);
    const [badge, setBadge] = useState('')
    const [posts] = usePost();
    
//    checking same users post
const post = posts.filter( post => post.authorEmail === user.email)
console.log(posts, post)

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

                 

                </>
                :
                <>
              <div className="">
              <div className="  ">
              {
                  currentUser.map(info => 
                    <SilverProfile
                    key = {info._id}
                    info = {info}
                    
                    ></SilverProfile>
                    )
                  
                  }
              </div>
                
                    {/* <div className=" card shadow-xl p-5 mx-auto border-0 border-t border-purple-600 text-center  ">
                        <h1 className="text-sm text-purple-950 pt-5 font-bold ">Proceed to payment to get the Golden Badge and avail the opportunity to post unlimited  </h1>
                        <h2 className="text-sm text-black font-bold mt-3">Amount : $1000</h2>

                        <Link to="/dashboard/payment">
                            <button className="btn mt-2 bg-purple-300 border-0 border-b-4 text-lg border-black w-full">
                                Pay
                            </button>
                        </Link>
                    </div> */}
                    <h1 className= "mt-20"><SectionTitle heading = {"My 3 Recent Posts"}></SectionTitle></h1>
                  <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mt-10">
                    
                  {
                    post.slice(3, 6).map(myPost =>
                        <MyPost
                        key = {myPost._id}
                        myPost = {myPost}
                        >

                        </MyPost>
                        
                        )

                  }
                  </div>
              </div>
                </>
            }
        </div>
    );
};

export default MyProfile;