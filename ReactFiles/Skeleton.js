import Header from "./Skeleton/Header";
import Footer from "./Footer";
import Body from "./Skeleton/Body";
import { Outlet } from "react-router-dom";
const Skeleton = () => {
  return (
    <>
      <Header />
      <Body />
      <Outlet />
      <Footer />
    </>
  );
};

export default Skeleton;
