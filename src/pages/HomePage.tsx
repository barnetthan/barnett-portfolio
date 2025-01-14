import NavBar from "../components/NavBar";
import headshot from "../assets/BarnettHeadShot.png";
import "../styles/HomePage.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import Footer from "../components/Footer";
import "../styles/App.css";

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
    <div className="page-outline-box">
      <NavBar curPage="home" />
      <div className="container">
        <div className="row align-items-center mt-0 mt-sm-5">
          <div className="col-12 col-md-7 order-2 order-md-1 text-md-start text-center">
            <h1 className="hero-heading">Hello! 你好!</h1>
            <h1>I am Barnett Han</h1>
            <h2 className="d-block d-md-none">
              Software Engineer
            </h2>
            <h2 className="d-block d-md-none">
            CS Student @ UT Austin
            </h2>
            <h2 className="d-none d-md-block">
              Software Engineer & CS Student @ UT Austin
            </h2>
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

          <div className="col-12 col-md-5 order-1 order-md-2 text-center mt-4 mt-md-0">
            <img
              className="headshot-img img-fluid"
              src={headshot}
              alt="Barnett Han"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
