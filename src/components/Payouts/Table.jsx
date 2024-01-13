const Table = (prop) => {
  const data = prop.data;
  {
    console.log(data);
  }
  return (
    <div
      className={`bg-[#FFFFFF] p-5 shadow-sm flex justify-around  ${
        data.active && "bg-[#F2F2F2] text-[#7B7B7B]  font-semibold"
      } ${!data.active && "border-b-2"}`}
    >
      <div className={`${!data.active && "text-[#5797C9] font-semibold"}`}>
        {data.orderId}{" "}
      </div>
      <div className="flex items-center gap-1">
        <div className={`${data.active && "hidden"}`}>
          {data.status == "Successful" ? (
            <div className="w-3 h-3 rounded-full bg-green-400" />
          ) : (
            <div className="w-3 h-3 rounded-full bg-gray-400" />
          )}
        </div>

        {data.status}
      </div>
      <div>{data.transactionId}</div>
      <div>{data.refundDate}</div>
      <div>{data.orderAmount}</div>
    </div>
  );
};

export default Table;
