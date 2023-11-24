import { NavLink } from "react-router-dom";

import DarkMode from "../DarkMode/DarkMode";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>MovieApp</h1>
      <div className="navbar_links">
        <DarkMode />
        <NavLink to="/">인기작품</NavLink>
        <NavLink to="/top_rated">최고평점</NavLink>
        <NavLink to="/upcoming">상영예정</NavLink>
        <NavLink to="/search">영화검색 </NavLink>
      </div>
    </nav>
  );
}
