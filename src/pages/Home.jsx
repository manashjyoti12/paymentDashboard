import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Navbar from "../components/Navbar";

const Home = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="home">
      <div
        className={`sidebar h-screen bg-[#1E2640] text-[#CED0D5] p-4 ${
          open ? "w-72" : "w-24"
        } duration-300 relative`}
      >
        <FaAngleDown
          className="arrow bg-white rounded-full p-1 absolute text-3xl  border-2 border-[#CED0D5]  -right-3 top-6"
          onClick={() => {
            setOpen(!open);
          }}
        />

        <div>
          <img
            src="https://png.pngtree.com/png-vector/20190322/ourmid/pngtree-shop-logo-vector-template-design-illustration-png-image_860078.jpg"
            className="w-14"
          />
        </div>
      </div>

      {/* NAVBAR*/}

      <div className="navbar w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
