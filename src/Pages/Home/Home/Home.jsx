
import { Helmet } from "react-helmet-async";
import Announcement from "../../Announcement/Announcement";
import Banner from "../Banner/Banner";
import Tags from "../Tags/Tags";
import useAnnouncement from "../../../hooks/useAnnouncement";
import Thaughts from "../Thaughts/Thaughts";

const Home = () => {
    const [announcements] = useAnnouncement();
    // console.log("lff", announcements.length>0)
    return (
        <div>
            <Helmet>
                <title>Thaught Space | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="space-y-20 grid grid-cols-4 gap-4 mb-96 ">
                <div className="col-span-3">
                    {
                        announcements.length > 0 && <Announcement></Announcement>
                    }
                    <div className=" ml-16">
                        <Thaughts></Thaughts>
                    </div>
                </div>
                {/* <div className="relative lg:fixed lg:top-28 lg:right-0 w-24  md:w-36 "> */}
                <div className=" fixed top-28 right-0 w-24  md:w-36 ">
                    <Tags></Tags>
                </div>
            </div>
        </div>
    );
};

export default Home;