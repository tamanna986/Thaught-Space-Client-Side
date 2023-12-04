import useTag from "../../../hooks/useTag";
import Tag from "../Tag/Tag";


const Tags = () => {
    const [tags , refetch] = useTag();
    // console.log("tag is ", tags)
    return (
        <div className="bg-black opacity-80 py-5 px-1 md:px-3 h-[370px] w-24 md:w-32 text-purple-100 mt-6 font-bold ">
            <h1 className=" mx-auto border-b-4  border-purple-900 w-16 mb-5 text-lg">Tags</h1>
            
            <div>
            
                {tags.map(tag => (
                    <Tag key={tag._id} tag={tag} />
                ))}
            
            </div>
        </div>
    );
};

export default Tags;