import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./action";

const Dispatch = () => {
  const { posts, loading } = useSelector((state) => ({ ...state.data }));
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Redux Thunk</h1>
      
      <button className="ml-5 btn btn-primary" onClick={() => dispatch(fetchPosts())}>
        Fetch Post
      </button>
      {!loading ? (
        posts.map((post) => <h6 className="py-2" key={post.id}>{post.body}</h6>)
      ) : (
        <h6>Loading...</h6>
      )}
    </div>
  );
};

export default Dispatch;
