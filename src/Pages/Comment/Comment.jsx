import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useComments from "../../hooks/useComments";


const Comment = () => {
    // const {id} = useLoaderData()

    const [comments] = useComments();
    // console.log(comments, id);
    return (
        <div className="">
        <SectionTitle  heading = {"All Comments"}></SectionTitle>

        
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr className="font-bold text-lg text-purple-950">
                       
                        <th>Commented by</th>
                        <th>Comment</th>
                        <th>Feedback</th>
                        <th>Report</th>
                    </tr>
                </thead>
                <tbody>
                     
                            <td>email</td>
                            
                            {/* <td>{comment}</td> */}
                            <td>
                                
                                    <button className="btn bg-purple-400 text-white">Comment</button>
                            </td>
                            <td>feedback</td>
                            <td>
                                <button className="btn btn-danger btn-lg">
                                    Report
                                </button>
                            </td>
                    
                    

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Comment;