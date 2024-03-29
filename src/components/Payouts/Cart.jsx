import { GoQuestion } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

const Cart = (prop) => {
  const data = prop.data;
  const currentDate = new Date();
  let currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes().toString().padStart(2, "0");
  let amPm = "AM";

  // Convert to 12-hour format
  if (currentHours > 12) {
    currentHours -= 12;
    amPm = "PM";
  }

  // Handle midnight (12:00 AM)
  if (currentHours === 0) {
    currentHours = 12;
  }
  const currentTime = `${currentHours}:${currentMinutes} ${amPm}`;
  return (
    <div
      className={` p-5 rounded-lg ${
        data.active && "pb-20 relative"
      } shadow-sm ${data.active ? "bg-[#146EB4]" : "bg-[#FFFFFF]"} ${
        data.active ? "text-[#FFFFFF]" : "text-[#777777]"
      } `}
    >
      <div
        className={`text-base mb-4 flex gap-1 items-center ${
          data.active ? " text-[#eeeeee]" : "text-[#777777]"
        }`}
      >
        {data.title} <GoQuestion className={`${data.Payout && "hidden"}`} />
      </div>

      <div
        className={`flex justify-between items-center w-96 ${
          data.Payout && "w-[65vh]"
        }  `}
      >
        <div
          className={`text-3xl font-semibold ${
            data.active ? "text-[#FFFFFF]" : "text-[#27252A]"
          }`}
        >
          <span className={`${data.num && "hidden"}`}>₹</span> {data.amount}
        </div>

        <div
          className={`text-sm flex items-center cursor-pointer ${
            !data.orders && "hidden"
          }`}
        >
          <span
            className={`underline font-semibold ${
              data.active ? "text-[#eeeeee]" : "text-[#4e9ad5]"
            }`}
          >
            {data.orders} orders
          </span>
          <IoIosArrowForward
            className={` ${data.active ? "text-[#FFFFFF]" : "text-[#146EB4]"}`}
          />
        </div>
      </div>
      <div
        className={`bg-[#0E4F82] rounded-lg p-5 text-[#E9ECEE] absolute flex justify-between  bottom-0 left-0 py-3 w-full text-sm ${
          !data.active && "hidden"
        } `}
      >
        <span>Next Payout date:</span>
        {data.dueDate} {currentTime}
      </div>
    </div>
  );
};

export default Cart;
