import Announcement from "../../Announcement/Announcement";
import Banner from "../Banner/Banner";
import Posts from "../Posts/Posts";
import Tags from "../Tags/Tags";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="space-y-20 grid grid-cols-4 gap-4 mb-96 ">
                <div className="col-span-3">
                <Announcement></Announcement>
                <Posts></Posts>
                </div>
                <div className="relative lg:fixed lg:top-0 lg:right-0  w-32 ">
                 <Tags></Tags>
                </div>
            </div>
        </div>
    );
};

export default Home;