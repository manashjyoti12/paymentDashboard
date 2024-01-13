import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BsTruck } from "react-icons/bs";
import { PiConfettiBold } from "react-icons/pi";
import { SiSimpleanalytics } from "react-icons/si";
import { FaMoneyBills } from "react-icons/fa6";
import { CiDiscount1 } from "react-icons/ci";
import { TbUsers } from "react-icons/tb";
import { IoColorPaletteOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import NavbarPayouts from "../components/Payouts/NavbarPayouts";
import { Link } from "react-router-dom";
import PayoutBody from "../components/Payouts/PayoutBody";

const Payouts = () => {
  const [open, setOpen] = useState(true);

  const menus = [
    { name: "Home", link: "/", icon: GoHome },
    { name: "Orders", link: "/", icon: LuClipboardList },
    { name: "Products", link: "/", icon: HiOutlineSquares2X2 },
    { name: "Delivery", link: "/", icon: BsTruck },
    { name: "Marketing", link: "/", icon: PiConfettiBold },
    { name: "Analytics", link: "/", icon: SiSimpleanalytics },
    { name: "Payout", link: "/payout", icon: FaMoneyBills, active: true },
    { name: "Discounts", link: "/", icon: CiDiscount1 },
    { name: "Marketing", link: "/", icon: PiConfettiBold },
    { name: "Audiances", link: "/", icon: TbUsers },
    { name: "Appearence", link: "/", icon: IoColorPaletteOutline },
    { name: "Plugins", link: "/", icon: AiOutlineThunderbolt },
  ];

  return (
    <div className="home">
      {/* SIDEBAR */}
      <div
        className={`sidebar h-screen bg-[#1E2640] text-[#CED0D5] z-50 p-4 ${
          open ? "w-60" : "w-24"
        } duration-300 relative`}
      >
        <IoIosArrowBack
          className={`arrow bg-white rounded-full p-1 absolute text-3xl cursor-pointer border-2 border-[#CED0D5]  -right-3 top-6 ${
            !open && "rotate-180"
          }`}
          onClick={() => {
            setOpen(!open);
          }}
        />

        {/* SIDEBAR HEAD SECTION */}
        <div className="HEAD mb-10 flex gap-3 ">
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

        {/* SIDEBAR BODY SECTION */}
        {menus?.map((menu) => (
          <>
            <Link to={menu?.link}>
              <div className="BODY pl-1 mt-4 flex justify-center ">
                <div
                  className={`flex items-center gap-3 w-full cursor-pointer p-2 rounded-lg  hover:bg-[#343C53] hover:text-[#FEFEFE]   ${
                    menu.active ? "bg-[#343C53] " : "bg-[#1E2640]"
                  }`}
                >
                  <div
                    className={
                      menu.active ? "text-[#FEFEFE] " : "text-[#CED0D5] "
                    }
                  >
                    {React.createElement(menu?.icon, { size: "30" })}
                  </div>
                  <span
                    className={`transition ease-in-out duration-300 ${
                      !open && "hidden"
                    } ${menu.active ? "text-[#FEFEFE] " : "text-[#CED0D5] "}`}
                  >
                    {menu.name}
                  </span>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>

      {/* NAVBAR*/}
      <div className="navbar w-full overflow-y-auto h-screen">
        <NavbarPayouts />
        <PayoutBody />
      </div>
    </div>
  );
};

export default Payouts;
