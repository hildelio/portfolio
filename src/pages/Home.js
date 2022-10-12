import React, { Component } from 'react';
import video from "../assets/video.mp4"

class Home extends Component {
  render() {
    return (
      <div className='video-content'>
        <video className='video' src={ video } autoPlay loop></video>
      </div>
    );
  }
}

export default Home;
