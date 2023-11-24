import "./MovieList.css";
import Fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import _ from "lodash";

export default function MovieList({ type, title, emoji }) {
  const [movies, setMovies] = useState([]); //API로 받아온 영화 목록
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  }); //정렬

  //모든 영화 가져오기
  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${
        import.meta.env.VITE_MOVIE_API_KEY
      }&language=ko`
    );
    const data = await response.json();
    setMovies(data.results); //영화 목록에 담기
    setFilterMovies(data.results);
  };

  // 평점보다 높은 영화들만 가져오기
  const handleFilter = (rate) => {
    if (minRating === rate) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);
      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filtered);
    }
  };

  //정렬
  const handelSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };
  //sort값이 바뀔 때마다 그 값으로 정렬
  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
      setFilterMovies(sortedMovies);
    }
  }, [sort]);

  //한 번만 실행
  useEffect(() => {
    fetchMovies();
  }, [type]);

  return (
    <section className="movie_list" id={`${type}`}>
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          {title} <img src={emoji} alt="fire emoji" className="navbar_emoji" />
        </h2>

        <div className="align_center movie_list_fs">
          <ul className="align_center movie_filter">
            <li
              className={
                minRating === 8
                  ? "movie_filter_item active"
                  : "movie_filter_item"
              }
              onClick={() => handleFilter(8)}
            >
              8+ Star
            </li>
            <li
              className={
                minRating === 7
                  ? "movie_filter_item active"
                  : "movie_filter_item"
              }
              onClick={() => handleFilter(7)}
            >
              7+ Star
            </li>
            <li
              className={
                minRating === 6
                  ? "movie_filter_item active"
                  : "movie_filter_item"
              }
              onClick={() => handleFilter(6)}
            >
              6+ Star
            </li>
          </ul>
          <select
            name="by"
            id="by"
            onChange={handelSort}
            className="movie_sorting"
          >
            <option value="default">정렬기준</option>
            <option value="release_date">날짜순</option>
            <option value="vote_average">평점순</option>
          </select>
          <select
            name="order"
            id="order"
            onChange={handelSort}
            className="movie_sorting"
          >
            <option value="asc">오름차순</option>
            <option value="desc">내림차순</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
