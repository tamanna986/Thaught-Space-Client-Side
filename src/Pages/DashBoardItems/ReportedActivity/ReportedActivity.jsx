import { Helmet } from "react-helmet-async";


const ReportedActivity = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Reported Activity</title>
            </Helmet>
            <h2 className="w-80 mx-auto mt-10  text-2xl text-black font-semibold">Reported Activity</h2>
            
            <p className=" mb-10 mx-auto w-48 border-b-4  border-purple-950"></p>
        </div>
    );
};

export default ReportedActivity;