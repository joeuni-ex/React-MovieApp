import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";
import { Route, Routes } from "react-router-dom";
import SearchMovieList from "./components/MovieList/SearchMovieList ";
import MovieVideo from "./components/MovieList/MovieVideo";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <div>
          <MovieVideo />
          <Routes>
            <Route
              path="/"
              element={
                <MovieList type="popular" title="인기작품" emoji={Fire} />
              }
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
            <Route
              path="/search"
              element={
                <SearchMovieList type="search" title="검색" emoji={Party} />
              }
            />
          </Routes>
        </div>
        <footer className="footer"></footer>
      </div>
    </>
  );
}

export default App;
