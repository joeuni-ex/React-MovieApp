import "./App.css";
import MovieList from "./components Navbar/MovieList/MovieList";
import Navbar from "./components Navbar/Navbar/Navbar";
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <div className="searchSection">
          <form>
            <input
              type="text"
              className="search"
              placeholder="검색어를 입력하세요..."
            />
            <button type="submit" className="searchBtn">
              검색
            </button>
          </form>
        </div>
        <Routes>
          <Route
            path="/"
            element={<MovieList type="popular" title="인기작품" emoji={Fire} />}
          />
          <Route
            path="/top_rated"
            element={
              <MovieList type="top_rated" title="최고평점" emoji={Star} />
            }
          />
          <Route
            path="/upcoming"
            element={
              <MovieList type="upcoming" title="예정작품" emoji={Party} />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
