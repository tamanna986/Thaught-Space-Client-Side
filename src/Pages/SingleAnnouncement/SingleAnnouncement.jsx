

const SingleAnnouncement = ({announcement}) => {
    return (
        <div className="flex gap-4 items-center card shadow-2xl  py-10 px-4  relative border-t border-purple-400 h-[270px]">
                <div className="avatar  absolute bottom-60 ">
                    <div className="w-16 rounded-full">
                        <img src={announcement.image} />
                    </div>
                </div>
                <div className="flex flex-col gap-4 ">
                  
                    <h1 className="font-bold text-lg text-purple-950" >{announcement.title}</h1></div>
                    <p className=" font-semibold ">{announcement.description}</p>
                    <p className=" text-sm text-purple-400">---{announcement.AuthorName}---</p>
            </div>
    );
};

export default SingleAnnouncement;