import React from "react";
import { NavLink } from "react-router-dom";

// item comes from Feed page =>   {posts.map(item => (

const Post = ({ item }) => {
  return (
    <div>
      <NavLink to={`/post/${item.id}`} style={{textDecoration: 'none'}}>
        
     
      <h2 className="mt-0 mb-2 text-5xl font-medium leading-tight text-slate-800" >{item.title}</h2>
        <h6 className="text-xl text-neutral-900">{item.datetime}</h6>
        </NavLink>
        
      <p>
        {/* if item has 50 character show all the text or put .... */}
        {item.body.length <= 50 
        ? item.body
        : `${item.body.slice(0, 50)}...`}
      </p>
      <hr />
    </div>
  );
};

export default Post;
