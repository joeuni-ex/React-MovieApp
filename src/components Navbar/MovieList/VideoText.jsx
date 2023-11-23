import React from "react";

const VideoText = ({ movieTitle, movieOverview }) => {
  return (
    <div className="video-text">
      <div>{movieTitle}</div>
      <div className="overview">
        {movieOverview.slice(0, 100) + "...더보기"}
      </div>
    </div>
  );
};

export default VideoText;
