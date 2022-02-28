import React from "react";
import "./videoItem.css";
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="item VideoItem">
      <img className="ui image" src={video.snippet.thumbnails.medium.url}></img>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
