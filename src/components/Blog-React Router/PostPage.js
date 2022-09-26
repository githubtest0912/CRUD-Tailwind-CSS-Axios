import React from "react";
import { useParams, NavLink } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <div className="p-5">
      <article>
        {/* // if post is there - display the post */}
        {post && (
          <>
            <h2>{post.title}</h2>
            <h6>{post.datetime}</h6>
            <p>{post.body}</p>
            <div className="flex py-3 space-x-2">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-red-600
                          text-white font-medium text-xs leading-tight uppercase rounded shadow-md
                          hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg
                            focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition
                            duration-150 ease-in-out"
                onClick={() => handleDelete(post.id)}
              >
                Delete
              </button>
            </div>
          </>
        )}
        {/* // if no post */}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>
              <NavLink to="/">Visit our Home page</NavLink>
            </p>
          </>
        )}
      </article>
    </div>
  );
};

export default PostPage;
