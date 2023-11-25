import React, { useEffect, useState } from "react";
import "./MovieVideo.css";
import VideoText from "./VideoText";

const MovieVideo = () => {
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState([]);
  const [movieTitle, setMovieTitle] = useState([]);
  const [movieOverview, setMovieOverview] = useState([]);

  let id = 207703; //영화 id

  //영화 디테일 조회
  const fetchMovie = async () => {
    const movieResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_MOVIE_API_KEY
      }&language=ko&page=1`
    );
    const data = await movieResponse.json();
    setMovieTitle(data.title); //영화 목록에 담기
    setMovieOverview(data.overview); //영화 목록에 담기
  };

  //영상 가져오기
  const geVideoDetails = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${
          import.meta.env.VITE_MOVIE_API_KEY
        }&language=ko-KR`
      )
    ).json();
    setVideo(json.results[0].key);
    setLoading(false);
  };

  useEffect(() => {
    geVideoDetails();
    fetchMovie();
  }, []);

  return (
    <div className="video-box opacity">
      <iframe
        className="video"
        src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1&loop=1&modestbranding=1&playlist=${video}&controls=0`}
        allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <VideoText
        movieTitle={movieTitle}
        movieOverview={movieOverview}
        movieId={id}
      />
    </div>
  );
};

export default MovieVideo;
