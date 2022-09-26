import React from 'react';
import Feed from './Feed';
 
const Home = ({posts}) => {
    return (
        <div className='w-full h-full bg-gradient-to-r from-green-300 to-blue-300 hover:from-pink-300 hover:to-yellow-200'>
            {posts.length > 0 ? (
            <Feed posts={posts} />
            ) : (
            <p>No posts to display</p>
            )}
        </div>
    );
}
 

 
export default Home;