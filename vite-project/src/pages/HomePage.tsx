import NavBar from "../components/NavBar";
import headshot from "../assets/BarnettHeadShot.png";
import "../styles/HomePage.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";


export const handleMailtoClick = () => {
  const email = "barnett.han@gmail.com";
  const subject = "Hello there!";
  const body = "Just reaching out to talk about...";
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;
};

function HomePage() {
  return (
    <>
      <NavBar curPage="home" />
      <div className="outer-container">
        <div>
          <h1 style={{fontSize: "100px"}}>Hello! 你好!</h1>
          <h1>I am Barnett Han</h1>
          <h2>Software Engineer & CS Student @ UT Austin</h2>
          <div className="icon-container">
            <FaGithub
              onClick={() => {
                window.open("https://github.com/barnetthan", "_blank");
              }}
              className="icon"
            />
            <FaLinkedin
              onClick={() => {
                window.open("https://linkedin.com/in/barnetthan", "_blank");
              }}
              className="icon"
            />
            <SiLeetcode
              onClick={() => {
                window.open("https://leetcode.com/u/barnetthan/", "_blank");
              }}
              className="icon"
            />
            <MdOutlineEmail onClick={handleMailtoClick} className="icon" />
          </div>
        </div>
        <img className="headshot-img" src={headshot} />
      </div>
    </>
  );
}

export default HomePage;
