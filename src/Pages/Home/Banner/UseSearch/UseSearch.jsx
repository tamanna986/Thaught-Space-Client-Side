

// const UseSearch = () => {
//     return (
        
//             <form className="p-5 my-1 lg:my-10 w-3/4  mx-auto">
//  <input type="text" placeholder="Search By Tags" className="  px-9 w-full border-none input outline-none" />
//  <input className="btn text-black  bg-purple-300" type="submit" value="submit" />
//             </form>
        
//     );
// };

// export default UseSearch;


// ytttt

import React, { useState } from 'react';

const UseSearch = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Trigger search with entered category name
        onSearch(searchValue);
    };

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <form className="p-5 my-1 lg:my-10 w-3/4 mx-auto flex " onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Copy Tags & Search By them for better result"
                className="px-9 w-full border-none input outline-none"
                value={searchValue}
                onChange={handleChange}
            />
            <input className="btn text-black bg-purple-300" type="submit" value="submit" />
        </form>
    );
};

export default UseSearch;


