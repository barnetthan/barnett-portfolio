import { NavLink } from "react-router-dom";

interface NavBarRoutesProps {
  curPage: string;
}

function NavBarRoutes({ curPage }: NavBarRoutesProps) {
  return (
    <div className="d-none d-sm-block">
      <ul style={{ marginRight: "3rem", marginTop: "18px" }}>
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
    </div>
  );
}

export default NavBarRoutes;
