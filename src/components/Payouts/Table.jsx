const Table = (prop) => {
  const data = prop.data;

  return (
    <div
      className={`bg-[#FFFFFF] p-5 shadow-sm flex justify-evenly ${
        data.active && "bg-[#F2F2F2] text-[#7B7B7B]  font-semibold"
      } ${!data.active && "border-b-2"}`}
    >
      <div className={`${!data.active && "text-[#5797C9] font-semibold"}`}>
        {data.orderId}
      </div>
      <div className={`flex items-center gap-1  ${!data.status && "hidden"}`}>
        <div className={`${data.active && "hidden"}`}>
          {data.status == "Successful" ? (
            <div className="w-3 h-3 rounded-full bg-green-400" />
          ) : (
            <div className="w-3 h-3 rounded-full bg-gray-400" />
          )}
        </div>

        {data.status}
      </div>
      <div className={`${!data.transactionId && "hidden"}`}>
        {data.transactionId}
      </div>
      <div>{data.date}</div>
      <div>{data.orderAmount}</div>
      <div>{data.transactionFees}</div>
    </div>
  );
};

export default Table;
