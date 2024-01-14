import { IoChevronDownSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { TbArrowsSort } from "react-icons/tb";
import { MdOutlineFileDownload } from "react-icons/md";
import {
  Next,
  Order,
  Payout,
  Pending,
  Processed,
  Recieved,
  Refunds,
} from "../../utils/data";
import Cart from "./Cart";
import Table from "./Table";
import { useState } from "react";

const PayoutBody = () => {
  const [refund, setRefund] = useState(true);

  return (
    <div className="max-w-[1366px] m-auto p-4 bg-[#FAFAFA]">
      {/* HEADER SECTION */}
      <div className="flex justify-between  mt-8  ">
        <div className="font-semibold text-xl text-[#4A494D] tracking-wider">
          Overview
        </div>
        <div className="text-[#8F8F8F] bg-[#FFFFFF] flex items-center gap-2 border-2 border-gray-5000 px-4 p-1 rounded-md cursor-pointer">
          This Month <IoChevronDownSharp />
        </div>
      </div>

      {/* CARD SECTION */}
      <div className={`flex justify-between mt-10 ${!refund && "hidden"}`}>
        <div>
          {Next?.map((prop) => (
            <>
              <Cart data={prop} />
            </>
          ))}
        </div>
        <div>
          {Pending?.map((prop) => (
            <>
              <Cart data={prop} />
            </>
          ))}
        </div>
        <div>
          {Processed?.map((prop) => (
            <>
              <Cart data={prop} />
            </>
          ))}
        </div>
      </div>

      <div className={`flex justify-between mt-10 ${refund && "hidden"}`}>
        <div>
          {Order?.map((prop) => (
            <>
              <Cart data={prop} />
            </>
          ))}
        </div>
        <div>
          {Recieved?.map((prop) => (
            <>
              <Cart data={prop} />
            </>
          ))}
        </div>
      </div>

      {/* Transaction Section */}
      <div className="mt-10 pb-6">
        <h1 className="font-bold text-xl tracking-wider text-[#4A494D]">
          Transactions | This Month
        </h1>

        <div className="flex gap-8 mt-4">
          <div
            onClick={() => {
              setRefund(false);
            }}
            className={` p-2 rounded-full px-6 cursor-pointer ${
              !refund && "bg-[#146EB4] text-[#C6DBED]"
            } ${refund && "bg-[#E6E6E6] text-[#8a8a8a] "}`}
          >
            Payouts (12)
          </div>

          <div
            onClick={() => {
              setRefund(true);
            }}
            className={` p-2 rounded-full px-6 cursor-pointer ${
              !refund && "bg-[#E6E6E6] text-[#8a8a8a] "
            } ${refund && "bg-[#146EB4] text-[#C6DBED]"}`}
          >
            Refunds (6)
          </div>
        </div>

        <div className="bg-[#FFFFFF] flex justify-between items-center mt-10 p-6 shadow-sm">
          <div className="flex items-center border-2 rounded-md focus:outline-none p-2 w-64 gap-3 ">
            <FaSearch className="text-[#9CA3AF] cursor-pointer" />
            <input
              className=" w-full focus:outline-none"
              placeholder="Order ID or Transaction ID"
            />
          </div>

          <div className="flex gap-4 text-[#9CA3AF] font-semibold">
            <div className="border-2 p-2 cursor-pointer rounded-md px-4 flex items-center gap-2">
              Sort <TbArrowsSort />
            </div>
            <div className="border-2 cursor-pointer p-2 text-xl rounded-md px-4 ">
              <MdOutlineFileDownload />
            </div>
          </div>
        </div>

        {/*TABLE SECTION */}
        <div className={`${!refund && "hidden"}`}>
          {Refunds.map((prop) => (
            <>
              <Table data={prop} />
            </>
          ))}
        </div>

        <div className={`${refund && "hidden"}`}>
          {Payout.map((prop) => (
            <>
              <Table data={prop} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PayoutBody;
