import { Illu1, Illu2, Illu3, Illu4 } from "../Images/Constants";
import HomeDisplay from "./HomeDisplay";

const Body = () => {
  return (
    <>
      <HomeDisplay srcc={Illu1} />
      <HomeDisplay srcc={Illu2} />
      <HomeDisplay srcc={Illu3} />
      <HomeDisplay srcc={Illu4} />
    </>
  );
};

export default Body;
