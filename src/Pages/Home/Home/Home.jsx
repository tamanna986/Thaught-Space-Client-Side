
import { Helmet } from "react-helmet-async";
import Announcement from "../../Announcement/Announcement";
import Banner from "../Banner/Banner";
import Posts from "../Posts/Posts";
import Tags from "../Tags/Tags";
import useAnnouncement from "../../../hooks/useAnnouncement";

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
                    announcements.length>0 && <Announcement></Announcement>
                }
                <Posts></Posts>
                </div>
                <div className="relative lg:fixed lg:top-28 lg:right-0  md:w-32 ">
                 <Tags></Tags>
                </div>
            </div>
        </div>
    );
};

export default Home;