import { useState } from "react";
import Navbar from "../components/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { GoHome } from "react-icons/go";

const Home = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="home">
      <div
        className={`sidebar h-screen bg-[#1E2640] text-[#CED0D5] p-4 ${
          open ? "w-52" : "w-24"
        } duration-300 relative`}
      >
        <IoIosArrowBack
          className={`arrow bg-white rounded-full p-1 absolute text-3xl  border-2 border-[#CED0D5]  -right-3 top-6 ${
            !open && "rotate-180"
          }`}
          onClick={() => {
            setOpen(!open);
          }}
        />

        <div className="HEAD flex gap-3 ">
          <img
            src="https://png.pngtree.com/png-vector/20190322/ourmid/pngtree-shop-logo-vector-template-design-illustration-png-image_860078.jpg"
            className="w-14 rounded-lg"
          />

          <div
            className={`transition ease-in-out duration-300 flex flex-col justify-between ${
              !open && "hidden"
            }`}
          >
            <h3 className="font-bold">Nishyan</h3>
            <p className="font-light text-sm underline underline-offset-2 cursor-pointer">
              Visit Store
            </p>
          </div>
        </div>

        <div className="BODY mt-10 flex justify-center">
          <div className="flex items-center  gap-4 cursor-pointer">
            <GoHome className="text-3xl" />
            <span
              className={`transition ease-in-out duration-300 ${
                !open && "hidden"
              }`}
            >
              Home
            </span>
          </div>
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
