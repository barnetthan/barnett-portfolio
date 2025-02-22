import paycom from "../assets/paycom-final.png";
import ImageBox from "../components/ImageBox";
import NavBar from "../components/NavBar";
// import alignable from "../assets/alignable-final.png";
import c1 from "../assets/c1logo.png";
import google from "../assets/googlelogo.png";
import ut from "../assets/ut-logo.png";
import { handleMailtoClick } from "./HomePage";
// import "../styles/AboutPage.css";
import Footer from "../components/Footer";
import "../styles/App.css";

function AboutPage() {
  return (
    <div className="page-outline-box">
      <NavBar curPage="about" />
      <div className="page-container">
        <div className="d-block d-sm-none">
          <ImageBox />
        </div>
        <div className="experience-container">
          {/* <div className="experience-detail">
            <img src={alignable} />
            <div className="experience-detail-text">
              <div>Software Engineering Co-Op @ Alignable</div>
              <div className="year-text">01/2025 - Present</div>
            </div>
          </div> */}
          <div className="experience-detail">
            <img src={google} />
            <div className="experience-detail-text">
              <div className="experience-dates">Incoming August 2025</div>
              <div className="experience-title">Software Engineer Intern</div>
              <div className="experience-company">Google</div>
            </div>
          </div>
          <div className="experience-detail">
            <img src={c1} />
            <div className="experience-detail-text">
              <div className="experience-dates">
                Incoming June 2025
              </div>
              <div className="experience-title">Software Engineer Intern (TIP)</div>
              <div className="experience-company">Capital One</div>
            </div>
          </div>
          <div className="experience-detail">
            <img src={paycom} />
            <div className="experience-detail-text">
              <div className="experience-dates">
                May 2023 - August 2023, May 2024 - August 2024
              </div>
              <div className="experience-title">
                Software Development Intern
              </div>
              <div className="experience-company">Paycom</div>
            </div>
          </div>
          <div className="experience-detail">
            <img src={ut} />
            <div className="experience-detail-text">
              <div className="experience-dates">August 2022 - May 2026</div>
              <div className="experience-title">B.S. in Computer Science</div>
              <div>w/ minor in Business</div>
              <div className="experience-company">
                University of Texas at Austin
              </div>
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
              <span onClick={handleMailtoClick} className="email">
                barnett.han@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className="d-none d-sm-block">
          <ImageBox />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
