import DisplayPrice from "./DisplayPrice";

const Pricing = () => {
  return (
    <>
      <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  bg-[#B5828C]">
        <DisplayPrice duration={12} price={100} points={35} />
        <DisplayPrice duration={9} price={75} points={27} />
        <DisplayPrice duration={6} price={60} points={20} />
        <DisplayPrice duration={3} price={20} points={10} />
      </div>
    </>
  );
};

export default Pricing;
