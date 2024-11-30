import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function ResumePage() {
  const pdfUrl = "/barnett-portfolio/BarnettHanResume.pdf";

  return (
    <div className="page-outline-box">
      <NavBar curPage="resume" />
      <div
        style={{
          width: "100%",
          height: "81vh",
          display: "flex",
          justifyContent: "center",
          marginTop: "16px",
        }}
      >
        <object
          data={`${pdfUrl}#zoom=90`}
          type="application/pdf"
          width="65%"
          height="100%"
        ></object>
      </div>
      <Footer/>
    </div>
  );
}

export default ResumePage;
