import { FaExternalLinkAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function ResumePage() {
  const pdfUrl = "/barnett-portfolio/BarnettHanResume.pdf";

  return (
    <div className="page-outline-box">
      <NavBar curPage="resume" />

      <div
        className="d-flex d-sm-none justify-content-center align-items-center"
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1E70BxrCuzRiGxcb7yYohZQV3vp_rH_5S/view?usp=sharing",
            "_blank"
          );
        }}
      >
        <p
          style={{
            fontSize: "30px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          Link to Resume&nbsp; <FaExternalLinkAlt />
        </p>
      </div>

      <div
        className="d-none d-sm-flex justify-content-center"
        style={{
          width: "100%",
          height: "81vh",
          marginTop: "16px",
        }}
      >
        <object
          data={`${pdfUrl}#zoom=100`}
          type="application/pdf"
          width="80%"
          height="100%"
        />
      </div>
      <Footer />
    </div>
  );
}

export default ResumePage;
