import React, { useState, useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Footer from "./Footer";
import NotFound from "./NotFound";
import {format} from 'date-fns'

import { Routes, Route, useNavigate } from "react-router-dom";
import set from "date-fns/set";

const Index = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Do Your Research",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "In blogging, content rules all. As developers, we may have multiple ideas, problem-solving steps, and new learnings we want to get down. But the most crucial part is being able to turn it into quality content. It's usually necessary to take the time required to research your topic thoroughly.",
    },
    {
      id: 2,
      title: "Know your purpose",
      datetime: "June 01, 2022 10:17:36 PM",
      body: "We all need a purpose when we start something and the motivation to continue it. The intent behind our actions and our motivation may be different for everyone. You need to find your intent or purpose that explains why you want to start a blog or share your content",
    },
    {
      id: 3,
      title: "Find Your Motivation",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Motivation can do wonders when you have it, but it can be hard to continue without it. As a content creator, your biggest motivation is likely to hear feedback from your readers. Positive feedback and constructive criticism always help you improve the content you create.",
    },
  ]);
  // search
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postNewTitle, setPostNewTitle] = useState("");
  const [postNewBody, setPostNewBody] = useState("");
  const navigate = useNavigate();

// search
useEffect(() => {
    const filteredResult = posts.filter(post => 
        ((post.body).toLowerCase()).includes(search.toLowerCase())
        || 
        ((post.title).toLowerCase()).includes(search.toLowerCase()))
        setSearchResult(filteredResult.reverse());
        

},[posts, search])



  //post / submit new post

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length -1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title:postNewTitle, datetime, body:postNewBody}
    const allPosts = [...posts, newPost];
    setPosts(allPosts)
    setPostNewTitle('');
    setPostNewBody('');
    navigate("/");

  };

  // delete button
  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);
    // if you delete a post, after that it will navigate to home page
    navigate("/");
  };
  return (
    <div>
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch} />

      <Routes>
        {/* // In home initially posts={posts} will come. If you use search, change this like posts={searchResult} */}
        <Route path="/" element={<Home posts={searchResult} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/post"
          element={
            <NewPost
              postNewTitle={postNewTitle}
              setPostNewTitle={setPostNewTitle}
              postNewBody={postNewBody}
              setPostNewBody={setPostNewBody}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="/post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Index;
