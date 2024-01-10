import "./style.scss";
import { FaAngleDown } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="sidebarComponent h-screen">
      <div className="head">
        <div className="brand">
          <img
            src="https://png.pngtree.com/png-vector/20190322/ourmid/pngtree-shop-logo-vector-template-design-illustration-png-image_860078.jpg"
            className="img"
          />
          <div>
            <h3 className="storeName">Nishyan</h3>
            <p className="storeLink">Visit Store</p>
          </div>
        </div>

        <div>
          <FaAngleDown className="arrow" />
        </div>
      </div>

      <div className="body"></div>
    </div>
  );
};

export default Sidebar;
