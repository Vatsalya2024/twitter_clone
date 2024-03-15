import React from 'react'
import TweetBox from './TweetBox';
import './Feed.css'
import Post from './Post';
function Feed() {
  return (
    <div className='feed'>
      {/* header */}
      <div className='feed__header'>
        <h2>Home</h2>
      </div>
      {/* tweetbox */}
        <TweetBox/>
      {/* post */}
      <Post/>
      {/* post */}
      {/* post */}
      {/* post */}
      {/* post */}
      {/* post */}
      {/* post */}
      {/* post */}
    </div>
  );
}

export default Feed;
