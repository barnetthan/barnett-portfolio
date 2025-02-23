import "../styles/App.css";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return <div className="footer">© {currentYear} Barnett Han</div>;
}
