const HomeDisplay = ({ srcc }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto px-4 min-h-screen gap-8 ">
        <img className=" md:w-128  h-auto sm: w-64 rounded-full " src={srcc} />
        <p className="align-center justify-between p-10 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </>
  );
};

export default HomeDisplay;
