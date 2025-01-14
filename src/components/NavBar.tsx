import { NavLink, useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
import "@fontsource/roboto/400.css";
import NavBarRoutes from "./NavBarRoutes";
import NavBarHamburger from "./NavBarHamburger";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { PiProjectorScreenChart } from "react-icons/pi";
import { IoDocumentText } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

interface NavBarProps {
  curPage: string;
}

export default function NavBar({ curPage }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  function navigateSite(route: string) {
    navigate(route);
    setMenuOpen(false);
  }

  return (
    <div className="container-fluid">
      <nav className="nav">
        <NavLink to="/">
          <h1 className="site-title">Barnett Han</h1>
        </NavLink>
        <NavBarRoutes curPage={curPage} />
        <NavBarHamburger
          curPage={curPage}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </nav>
      {menuOpen ? (
        <div className="sidebar">
          <div className="sidebar-top">
            <div className="sidebar-list">
              <ul>
                <li
                  onClick={() => {
                    navigateSite("/");
                  }}
                  className="sidebar-item glow"
                  style={{marginBottom: "0.4rem"}}
                >
                  <FaHome /> <div>&nbsp;Home</div>
                </li>
                <li
                  onClick={() => {
                    navigateSite("/projects");
                  }}
                  className="sidebar-item glow"
                  style={{marginBottom: "0.4rem"}}
                >
                  <PiProjectorScreenChart /> 
                  <div>&nbsp;Projects</div>
                </li>
                <li
                  onClick={() => {
                    navigateSite("/resume");
                  }}
                  className="sidebar-item glow"
                  style={{marginBottom: "0.4rem"}}
                >
                  <IoDocumentText /> <div>&nbsp;Resume</div>
                </li>
                <li
                  onClick={() => {
                    navigateSite("/about");
                  }}
                  className="sidebar-item glow"
                  style={{marginBottom: "0.4rem"}}
                >
                  <IoPerson /> <div>&nbsp;About</div>
                </li>
              </ul>
            </div>
            <div>
              <p
                onClick={() => {
                  setMenuOpen(false);
                }}
                style={{ cursor: "pointer", fontSize: "1.2rem" }}
                className="sidebar-item glow"
              >
                <IoClose /> &nbsp;Close
              </p>
            </div>

          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
