import React from 'react';
import Post from './Post';
 
const Feed = ({posts}) => {
    return (
        <div>
           {posts.map(item => (
            <Post key={item.id}
             item={item}/>
           ))}
        </div>
    );
}
 

 
export default Feed;