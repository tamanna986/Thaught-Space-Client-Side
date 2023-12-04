import { useContext } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { Helmet } from "react-helmet-async";
import useAllUsers from "../../../hooks/useAllUsers";
import useComments from "../../../hooks/useComments";
import usePost from "../../../hooks/usePost";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

const AdminProfile = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = UseAxiosSecure();
    const [Allusers] = useAllUsers();
    const [comments] = useComments();
    const [posts] = usePost();

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const tags = {tag: data.tag}
       
       
            
               
        axiosSecure.post('/tags', tags)
                         .then(res =>{
                            if (res.data.insertedId) {
                                console.log('Tag added to the database')
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Tag created successfully.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                
                            }
                         })
   


    };

    const allUsersp = Allusers.length                    
   const allCommentsp = comments.length                    
   const allPostsp = posts.length 
                      
   const chartData = [{"category" :"allUsers", "value" :  allUsersp }, {"category" :"allPosts", "value": allPostsp}, {"category" : "allComents" , "value":allCommentsp}]
   console.log(chartData)


    // custom shape for the pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
   
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
   
    const pieChartData = chartData.map(data => {
        return {name: data.category, value: data.value}
    })
   
   




    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Admin Profile</title>
            </Helmet>
        <SectionTitle heading = {"Admin Profile"}></SectionTitle>
            <div className="flex gap-4 items-center card shadow-2xl  py-10  relative border-t border-purple-400">
                <div className="avatar online absolute bottom-36 md:bottom-28">
                    <div className="w-16 rounded-full">
                        <img src={user.photoURL} />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                   <h1 className="font-bold text-lg text-purple-950">Name : <span className="text-black">{user.displayName}</span></h1>
                    <h1 className="font-bold text-lg text-purple-950" >Email: <span className="text-black">{user.email}</span></h1></div>
            </div>

            {/* total user, comment,post */}

            <div className="stats shadow mx-0 md:mx-20 mt-20">
         
  <div className="stat ">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Posts</div>
    <div className="stat-value text-primary">{posts.length}</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Total Comments</div>
    <div className="stat-value text-secondary">{comments.length}</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </div>
    <div className="stat-value">{Allusers.length}</div>
    <div className="stat-title">Total Users</div>
    <div className="stat-desc text-secondary">31%  user increased</div>
  </div>
  
</div>



<SectionTitle heading = {"Analysis"}></SectionTitle>
   <div className="ml-20 md:ml-32 lg:ml-56 -mt-20">
   
    {/* pie chart  */}

<PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
   </div>




            {/* adding tag */}
            <div>
                <SectionTitle heading = {"Add Tags"}></SectionTitle>
<form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-64 md:w-96 mx-auto my-6">
                        <label className="label">
                            <span className="label-text font-bold text-lg">Tag Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Tag Name"
                            {...register('tag', { required: true })}
                            required
                            className="input input-bordered w-full" />
                            <button className="btn mt-7 bg-purple-300 border-0 border-b-4  border-black w-full">
                        Add Tag
                    </button>
                    </div>
                   
                </form>
            </div>

        </div>

    );
};

export default AdminProfile;