import NavBar from "../components/NavBar";
import ImageBox from "../components/ImageBox";
import whitelogo from "../assets/paycom-final.png";
import alignable from "../assets/alignable-final.png";
import ut from "../assets/ut-logo.png";
import { handleMailtoClick } from "./HomePage";
import "../styles/AboutPage.css";

function AboutPage() {
  return (
    <>
      <NavBar curPage="about" />
      <div className="page-container">
        <div className="experience-container">
          <div className="experience-detail">
            <img src={alignable} />
            <div className="experience-detail-text">
              <div>Software Engineering Co-Op @ Alignable</div>
              <div className="year-text">01/2025 - Present</div>
            </div>
          </div>
          <div className="experience-detail">
            <img src={whitelogo} />
            <div className="experience-detail-text">
              <div>Software Development Intern @ Paycom</div>
              <div className="year-text">
                05/2023 - 08/2023, 05/2024 - 08/2024
              </div>
            </div>
          </div>
          <div className="experience-detail">
            <img src={ut} />
            <div className="experience-detail-text">
              <div>BS, Computer Science w/ Minor in Business</div>
              <div>University of Texas at Austin</div>
              <div className="year-text">08/2022 - 05/2026</div>
            </div>
          </div>

          <div className="experience-bio">
            <p>
              Hi, thanks for stopping by! My name is Barnett and I am currently
              a Junior at the University of Texas at Austin studying Computer
              Science. I am very interested in full stack development and hope
              to become a software engineer upon graduation. In my free time, I
              enjoy playing basketball, working out, hanging out with my
              girlfriend, and playing poker with my friends. Feel free to check
              out some of my projects linked in the project tab!
            </p>
            <div style={{ marginTop: "16px" }}>
              Contact me at:&nbsp;
              <span onClick={handleMailtoClick} className="email">barnett.han@gmail.com</span>
            </div>
          </div>
        </div>
        <ImageBox />
      </div>
    </>
  );
}

export default AboutPage;
