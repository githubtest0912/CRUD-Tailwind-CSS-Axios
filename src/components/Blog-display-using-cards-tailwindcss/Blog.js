
import React, {useState} from "react";
import BlogList from "./BlogList";
const Blog = () => {

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
  return (
    <div>
<BlogList posts={posts}/>
{/* // filter only title='My first post' */}
<BlogList posts={posts.filter((item) => item.title === 'My first post')} />
    </div>
  )

  
}

export default Blog;