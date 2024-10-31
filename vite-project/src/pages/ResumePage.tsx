import NavBar from '../components/NavBar'

function ResumePage() {

  return (
    <>
      <NavBar curPage = "resume"/>
      <h1> Resume for Barnett Han</h1>
      <object data="file:///Users/barnetthan/Desktop/Internship%20Apps/BarnettHanResume.pdf" type="application/pdf" width="100%" height="100%">
        <p>Alternative text - include a link <a href="file:///Users/barnetthan/Desktop/Internship%20Apps/BarnettHanResume.pdf">to the PDF!</a></p>
      </object>
    </>
  )
}

export default ResumePage;
