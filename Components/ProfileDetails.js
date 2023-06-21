import React from 'react'
import Navbar from './Navbar'
import ReelOne from '../assets/reelone.mp4';
import ReelTwo from '../assets/reeltwo.mp4';
const ProfileDetails = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className='profile_upper'>
            <img src='https://firebasestorage.googleapis.com/v0/b/temp-d8426.appspot.com/o/undefined%2FProfile?alt=media&token=25cb7160-8b94-4f11-8920-9bacece6ab3d' style={{height:"8rem", width:"8rem", borderRadius:"50%"}}></img>
            <div style={{flexBasis:"40%", color:"black"}}>
                <h1> Name </h1>
                <h3> posts: 10 </h3>
            </div>
        </div>
        <hr />
        <div className='profile_videos'>
            <video src={ReelOne}></video>
            <video src={ReelTwo}></video>
            <video src={ReelTwo}></video>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails
