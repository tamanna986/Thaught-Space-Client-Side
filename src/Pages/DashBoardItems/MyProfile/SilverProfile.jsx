

const SilverProfile = ({info}) => {
    return (
        <div className="flex gap-4 items-center card shadow-2xl  py-10  relative border-t border-purple-400 ">
        <div className="avatar online absolute bottom-48">
            <div className="w-16 rounded-full">
                <img src={info.photo} />
            </div>
        </div>
        <div className="flex flex-col gap-4 mt-3">
            <h1 className="font-bold text-lg text-purple-950">Name : <span className="text-black">{info.name}</span></h1>
            <h1 className="font-bold text-lg text-purple-950" >Email: <span className="text-black">{info.email}</span></h1>
           <div className="flex items-center">
           <h1 className="font-bold text-lg text-purple-950 " >Status: <span className="text-black">{info.status}</span> </h1>
            <img className="w-10 rounded-full" src="https://i.ibb.co/ZmVm370/silver-badge-10139032-8266540.png" alt="" />
           </div>
            </div>
    </div>
    );
};

export default SilverProfile;