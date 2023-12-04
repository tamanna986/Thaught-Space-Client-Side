// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import usePost from "../../../hooks/usePost"
// import ShowPosts from "../ShowPosts/ShowPosts";

// const Thaughts = () => {
//     const [posts] = usePost();
//     console.log(posts)
//     return (
//         <div>
           
//             <h1><SectionTitle heading = {"Thaughts"}></SectionTitle></h1>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
//             {
//                 posts.map(aPost => <ShowPosts
//                 key = {aPost._id}
//                 aPost = {aPost}
//                 ></ShowPosts>)
//             }
//             </div>
//         </div>
//     );
// };

// export default Thaughts;

// trrrrrr

import React, { useState } from 'react';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useFilteredPosts from "../../../hooks/useFilteredPosts";
import ShowPosts from "../ShowPosts/ShowPosts";
import UseSearch from '../Banner/UseSearch/UseSearch';

const Thaughts = () => {
    const [categoryName, setCategoryName] = useState('');
    const [posts, loading, refetch] = useFilteredPosts(categoryName);

    const handleSearchCategory = (searchCategory) => {
        setCategoryName(searchCategory);
    };

    return (
        <div>
        {/* Pass handleSearchCategory function as onSearch prop */}
        <div className='absolute top-56 left-0 md:top-[330px] lg:top-20 md:left-2 lg:left-10 w-full'><UseSearch onSearch={handleSearchCategory} /></div>

        <SectionTitle heading="Thoughts" />

        {loading ? (
            <p>Loading...</p>
        ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
                {posts.slice().reverse().map(aPost => (
                    <ShowPosts
                        key={aPost._id}
                        aPost={aPost}
                    />
                ))}
            </div>
        )}
    </div>
    );
};

export default Thaughts;







