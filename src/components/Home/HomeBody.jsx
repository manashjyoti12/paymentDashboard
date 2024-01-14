import { Link } from "react-router-dom";

const HomeBody = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-20 font-bold text-5xl">
      <div>
        <h1 className="text-[#4C4C4C] tracking-wider text-6xl">
          Coming soon...{" "}
        </h1>
      </div>

      <div className="my-10">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/website-under-maintenance-5380220-4498685.png?f=webp"
          className="w-11/12/12 m-auto"
        />
      </div>

      <div>
        <p className="text-[#ABABB3] text-sm">
          Our website is under construction, but certain parts are ready to
          explore
        </p>
      </div>
      <Link to="/payout">
        <div className="mt-4 cursor-pointer bg-[#223A86] p-2 px-6 rounded-lg text-[#FAFAFA] text-base tracking-widest">
          Explore !
        </div>
      </Link>
    </div>
  );
};

export default HomeBody;
