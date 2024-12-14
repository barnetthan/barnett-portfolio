import { GiHamburgerMenu } from "react-icons/gi";

interface NavBarHamburgerProps {
  curPage: string;
  menuOpen: boolean;
  setMenuOpen: Function;
}

function NavBarHamburger({ menuOpen, setMenuOpen }: NavBarHamburgerProps) {

  return (
    <div className="d-block d-sm-none hamburger">
      <GiHamburgerMenu style={{cursor: "pointer"}} onClick={() => {setMenuOpen(!menuOpen)}} />
    </div>
  );
}

export default NavBarHamburger;
