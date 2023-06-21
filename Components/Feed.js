import React from 'react'
import Navbar from './Navbar'
import Upload from './Upload'
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReelOne from '../assets/reelone.mp4';
import ReelTwo from '../assets/reeltwo.mp4';
function Feed() {
  return (
    <div className='feed-container'>
        <Navbar />
        <Upload />
        <div className='videos-container'>
          <div className='post-container'>
          <video src={ReelOne} />
            <div className='video-info'>
              <div className='avatar-container'>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{margin:"0.5rem", color:"black"}} />
                <p>Name</p>
              </div>
              <div className='post-like'><FavoriteBorderIcon fontSize='large' sx={{color:"black"}}/>10</div>
            </div>
          </div>
          <div className='post-container'>
            <video src={ReelTwo} />
          </div>
        </div>
    </div>
  )
}
export default Feed;
