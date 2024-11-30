import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import "@fontsource/roboto/400.css";

interface NavBarProps {
  curPage: string;
}

export default function NavBar({ curPage } : NavBarProps) {

  return (
    <nav className="nav">
      <NavLink to="/">
        <h1 className="site-title">Barnett Han</h1>
      </NavLink>
      <ul style={{ marginRight: 50, marginTop: "18px" }}>
        <li>
          <NavLink
            className="nav-item"
            style={{
              textDecorationLine: curPage == "home" ? "underline" : "none",
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-item"
            style={{
              textDecorationLine: curPage == "projects" ? "underline" : "none",
            }}
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-item"
            style={{
              textDecorationLine: curPage == "resume" ? "underline" : "none",
            }}
            to="/resume"
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-item"
            style={{
              textDecorationLine: curPage == "about" ? "underline" : "none",
            }}
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}