import NavBar from "../components/NavBar";
import ProjectInfoBox from "../components/ProjectInfoBox";
import ToDoListImage from "../assets/todolist.jpg";
import RecipeImage from "../assets/recipe.jpg";
import TicTacToeImage from "../assets/tictactoe.jpg";
import OctomizeImage from "../assets/octomize.png";
import InstaTabImage from "../assets/instatabLogo.jpg";
import TheVaultImage from "../assets/TheVaultLogo.jpg";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import "../styles/Projects.css";

function ProjectPage() {
  return (
    <div style={{ marginBottom: "10px" }}>
      <NavBar curPage="projects" />
      <div style={{marginTop: "15px"}}>
        <div className="outerPageBox">
          <ProjectInfoBox
            projectImage={OctomizeImage}
            route="https://github.com/barnetthan/Octomize"
            localRoute={false}
          >
            <div className="projectDescriptionBox">
              <h2
                onClick={() => {
                  window.open(
                    "https://github.com/barnetthan/Octomize",
                    "_blank"
                  );
                }}
                className="project-title"
              >
                Octomize <FaGithub />{" "}
                <FaExternalLinkAlt style={{ fontSize: "12px" }} />
              </h2>
              <ul>
                <li>
                  Generate scientifically-backed study schedules automatically!
                </li>
                <li>Created with: React, TypeScript, Firebase</li>
                <li>Linked to GitHub</li>
              </ul>
            </div>
          </ProjectInfoBox>
          <ProjectInfoBox
            projectImage={InstaTabImage}
            route="https://github.com/barnetthan/InstaTab"
            localRoute={false}
          >
            <h2
              onClick={() => {
                window.open("https://github.com/barnetthan/InstaTab", "_blank");
              }}
              className="project-title"
            >
              InstaTab <FaGithub />{" "}
              <FaExternalLinkAlt style={{ fontSize: "12px" }} />
            </h2>
            <ul>
              <li>Automatically transform mp3 audio into guitar tabs!</li>
              <li>Created with: React, TypeScript, Python, Flask</li>
              <li>Linked to GitHub</li>
            </ul>
          </ProjectInfoBox>
          <ProjectInfoBox
            projectImage={TheVaultImage}
            route="https://github.com/barnetthan/The-Vault"
            localRoute={false}
          >
            <h2
              onClick={() => {
                window.open("https://github.com/barnetthan/InstaTab", "_blank");
              }}
              className="project-title"
            >
              The Vault <FaGithub />{" "}
              <FaExternalLinkAlt style={{ fontSize: "12px" }} />
            </h2>
            <ul>
              <li>Discover underground artists you didn't know you loved!</li>
              <li>Created with: React Native, Spotify API</li>
              <li>Linked to GitHub</li>
            </ul>
          </ProjectInfoBox>
        </div>
      </div>
      <br />
      <div className="outerPageBox">
        <ProjectInfoBox
          projectImage={ToDoListImage}
          route="todolist"
          localRoute={true}
        >
          <div className="projectDescriptionBox">
            <h2
              onClick={() => {
                window.open("/projects/todolist", "_blank");
              }}
              style={{ display: "flex", alignItems: "center" }}
              className="project-title"
            >
              To Do List
              <BsFillRocketTakeoffFill style={{ fontSize: "20px", marginLeft: "10px" }} />
            </h2>
            <ul>
              <li>A simple to-do list to help you keep track of your tasks.</li>
              <li>Created with: React + TypeScript</li>
              <li>Runs locally - try it out now!</li>
            </ul>
          </div>
        </ProjectInfoBox>
        <ProjectInfoBox
          projectImage={TicTacToeImage}
          route="tictactoe"
          localRoute={true}
        >
          <div className="projectDescriptionBox">
            <h2
              onClick={() => {
                window.open("/projects/tictactoe", "_blank");
              }}
              className="project-title"
            >
              Tic-Tac-Toe
              <BsFillRocketTakeoffFill style={{ fontSize: "20px", marginLeft: "10px" }} />
            </h2>
            <ul>
              <li>Play a classic game of Tic Tac Toe against your friend!</li>
              <li>Created with: React + TypeScript</li>
              <li>Runs locally - try it out now!</li>
            </ul>
          </div>
        </ProjectInfoBox>
        <ProjectInfoBox
          projectImage={RecipeImage}
          route="recipes"
          localRoute={true}
        >
          <div className="projectDescriptionBox">
            <h2
              onClick={() => {
                window.open("/projects/recipes", "_blank");
              }}
              className="project-title"
            >
              Recipe Central
              <BsFillRocketTakeoffFill style={{ fontSize: "20px", marginLeft: "10px" }} />
            </h2>
            <ul>
              <li>
                A place to store, access, and add your great recipes! Preloaded
                with some classics to start you off!
              </li>
              <li>Created with: React + TypeScript</li>
              <li>Runs locally - try it out now!</li>
            </ul>
          </div>
        </ProjectInfoBox>
      </div>
    </div>
  );
}

export default ProjectPage;
