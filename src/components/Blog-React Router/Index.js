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
      title: "My first post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    },
    {
      id: 2,
      title: "My second post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    },
    {
      id: 3,
      title: "My third post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
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
