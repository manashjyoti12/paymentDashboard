import "../style.scss";
import "@fontsource/roboto";
import { FaSearch } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { TbTriangleInvertedFilled } from "react-icons/tb";

const NavbarPayouts = () => {
  return (
    <div className="navbarComponent sticky top-0 z-10">
      <div className="wrapper">
        <div className="brand">
          <h1>Payouts</h1>
          <p>
            <FaRegQuestionCircle /> How it works
          </p>
        </div>

        <div className="inputDiv">
          <FaSearch className="logo" />
          <input
            placeholder="Search features, tutorials, etc."
            className="input"
          />
        </div>

        <div className="icons">
          <div className="mesg">
            <RiMessage2Fill className="logo1" />
          </div>

          <div className="mesg1">
            <TbTriangleInvertedFilled className="logo2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarPayouts;
