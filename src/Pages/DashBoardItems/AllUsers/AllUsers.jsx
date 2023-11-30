
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import {  FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { LuBadgeCheck } from "react-icons/lu";

console.log(localStorage.getItem('access-token'))
const AllUsers = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users' );
            //  {
            //     headers: {
                    
            //         authorization: `Bearer ${localStorage.getItem('access-token')}`
            //     }
            // }
            
            return res.data;
        }
    })
// for making admin
    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    return (
        <div>
        <div className=" my-4">
            <h2 className="text-2xl text-center font-semibold mb-5 text-purple-900 md:text-3xl ">All Users ({users.length})</h2>
           <div className="border-b-2 border-black"></div>
        </div>
        <div className="overflow-x-auto">
            <table className="table table-zebra bg-purple-200 w-full">
                {/* head */}
                <thead  className="bg-black text-purple-200">
                    <tr className=" font-semibold text-lg ">
                        <th ></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Make Admin</th>
                        <th>Membership</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                { user.role === 'admin' ? 'Admin' : <button
                                    onClick={() => handleMakeAdmin(user)}
                                    className="btn btn-lg bg-purple-400">
                                    <FaUsers className="text-white 
                                    text-2xl"></FaUsers>
                                </button>}
                            </td>
                            <td>
                                <button
                                    
                                    className="btn btn-ghost btn-lg">
                                    <LuBadgeCheck className=""></LuBadgeCheck>
                                   
                                </button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllUsers;