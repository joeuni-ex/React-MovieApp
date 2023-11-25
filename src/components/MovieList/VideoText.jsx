import React from "react";

const VideoText = ({ movieTitle, movieOverview, movieId }) => {
  return (
    <div className="video-text">
      <div>{movieTitle}</div>
      <div className="overview">
        {movieOverview.slice(0, 100) + "...더보기"}
      </div>
      <a
        href={`https://www.themoviedb.org/movie/${movieId}?language=ko`}
        target="_blank"
      >
        <button className="button">상세보기</button>
      </a>
    </div>
  );
};

export default VideoText;
