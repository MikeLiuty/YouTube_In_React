import React from 'react';

const VideoDetil = ({video}) => {
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className = "video-detail col-md-8">
      <div className = "embed-responsive embed-responsive-16by9">
        <ifram className = "embed-responsive-item"></ifram>
      </div>
    </div>
    <div className = "details">
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
    </div>
  )
};

export default VideoDetil;
