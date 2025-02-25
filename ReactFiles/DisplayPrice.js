import { Illu1 } from "./Images/Constants";
const DisplayPrice = ({ duration, price, points }) => {
  return (
    <>
      <div className="border-3 border-[##504B38] inline-block bg-[#FFCDB2] p-2 m-4 rounded-md">
        <h1>{duration} Months Subsriction</h1>
        <img className="w-24 sm:w-28 md:w-30 lg:w-32 " src={Illu1} />
        <p>Only {price} Dollars</p>
        <p>You will earn {points} points per transaction</p>
      </div>
    </>
  );
};

export default DisplayPrice;
