import { useNavigate, NavLink } from "react-router-dom";
import React from "react";
import "../styles/NavBar.css";
import "@fontsource/roboto/400.css";

interface NavBarProps {
  curPage: string;
}

export default function NavBar({ curPage } : NavBarProps) {

  return (
    <nav className="nav">
      <a href="/home">
        <h1>React Projects</h1>
      </a>
      <ul style={{ marginRight: 50 }}>
        <li className="special">
          <NavLink
            className="uladjust"
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
            className="uladjust"
            style={{
              textDecorationLine: curPage == "todolist" ? "underline" : "none",
            }}
            to="/todolist"
          >
            To-Do List
          </NavLink>
        </li>
        <li>
          <NavLink
            className="uladjust"
            style={{
              textDecorationLine: curPage == "game" ? "underline" : "none",
            }}
            to="/game"
          >
            Game
          </NavLink>
        </li>
        <li>
          <NavLink
            className="uladjust"
            style={{
              textDecorationLine: curPage == "recipe" ? "underline" : "none",
            }}
            to="/recipes"
          >
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            className="uladjust"
            style={{
              textDecorationLine: curPage == "resume" ? "underline" : "none",
            }}
            to="/resume"
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}