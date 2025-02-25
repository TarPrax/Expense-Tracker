import { Illu1, Illu2, Illu3, Illu4 } from "../Images/Constants";
import HomeDisplay from "../Skeleton/HomeDisplay";

const Home = () => {
  return (
    <>
      <div className="bg-[#F8F3D9]">
        <HomeDisplay srcc={Illu1} />
        <HomeDisplay srcc={Illu2} />
        <HomeDisplay srcc={Illu3} />
        <HomeDisplay srcc={Illu4} />
      </div>
    </>
  );
};

export default Home;
