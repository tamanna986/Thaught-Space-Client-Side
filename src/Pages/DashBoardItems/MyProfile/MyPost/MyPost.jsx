

const MyPost = ({myPost}) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-xl font-bold text-purple-950">{myPost.postTitle}</h2>
    <p>#{myPost.category}</p>
    <p className="text-purple-800">{myPost.postDescription}</p>
    <div className="card-actions justify-end">
      <h2 className="font-semibold"><span className="text-purple-800">Post Date:</span> {myPost.postTime
}</h2>
    </div>
  </div>
</div>
    );
};

export default MyPost;