import NavBar from "../components/NavBar";

function ResumePage() {
  const pdfUrl = "/BarnettHanResume.pdf";

  return (
    <>
      <NavBar curPage="resume" />
      <div
        style={{
          width: "100%",
          height: "87vh",
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
    </>
  );
}

export default ResumePage;
