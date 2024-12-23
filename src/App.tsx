import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ToDoListPage from "./pages/ToDoListPage";
import GamePage from "./pages/GamePage";
import ResumePage from "./pages/ResumePage";
import RecipePage from "./pages/RecipePage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projects/todolist" element={<ToDoListPage />} />
          <Route path="/projects/tictactoe" element={<GamePage />} />
          <Route path="/projects/recipes" element={<RecipePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
