

const SectionTitle = ({heading}) => {
    return (
        <div>
            <h2 className="w-56 mx-auto mt-10  text-2xl text-black font-semibold">{heading}</h2>
            
            <p className=" mb-10 mx-auto w-32 border-b-4 border-purple-950"></p>
        </div>
    );
};

export default SectionTitle;