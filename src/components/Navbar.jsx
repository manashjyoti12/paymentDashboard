import Sidebar from "./Sidebar";
import "./style.scss";
import "@fontsource/roboto";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbarComponent">
      <Sidebar />

      <div className="wrapper">
        <div className="brand">
          <h1>Payouts</h1>
          <p></p>
        </div>
        <div className="inputDiv">
          <FaSearch className="logo" />
          <input
            placeholder="Search features, tutorials, etc."
            className="input"
          />
        </div>
        <div>
          <h1>icons</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
