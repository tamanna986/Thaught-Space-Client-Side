

const Button = ({btnName}) => {
    return (
        <div className="w-full">
              <button className="btn mt-7 bg-purple-300 border-0 border-b-4 text-lg border-black w-full">
                       {btnName}
                    </button>
                   
        </div>
    );
};

export default Button;