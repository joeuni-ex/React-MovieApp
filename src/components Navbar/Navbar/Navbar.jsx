import { NavLink } from "react-router-dom";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
import DarkMode from "../DarkMode/DarkMode";
import Search from "../../assets/search.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>MovieApp</h1>
      <div className="navbar_links">
        <DarkMode />
        <NavLink to="/">
          인기작품
          <img className="navbar_emoji" src={Fire} alt="fire emoji" />
        </NavLink>
        <NavLink to="/top_rated">
          최고평점
          <img className="navbar_emoji" src={Star} alt="star emoji" />
        </NavLink>
        <NavLink to="/upcoming">
          상영예정
          <img className="navbar_emoji" src={Party} alt="party emoji" />
        </NavLink>
        <NavLink to="/search">
          영화검색
          <img className="navbar_emoji" src={Search} alt="search emoji" />
        </NavLink>
      </div>
    </nav>
  );
}
