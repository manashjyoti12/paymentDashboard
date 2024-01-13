const Table = (prop) => {
  const data = prop.data;
  {
    console.log(data);
  }
  return (
    <div className="bg-[#FFFFFF] p-5 shadow-sm flex justify-around">
      <div>{data.orderId} </div>
      <div>{data.status}</div>
      <div>{data.transactionId}</div>
      <div>{data.refundDate}</div>
      <div>{data.orderAmount}</div>
    </div>
  );
};

export default Table;
