import { useState } from "react";
import Logo1 from "./Logos/Logo1";
import Logo2 from "./Logos/Logo2";
import Button1 from "./Logos/Button1.js";
const Header = () => {
  const [userStatus, SetUserStatus] = useState(false);

  return (
    <>
      <div className="lg:flex px-20 justify-between md:flex px-10 justify-between sm: flex px-4 justify-between">
        <Logo1 userStatus={userStatus}></Logo1>
        <Button1 userStatus={userStatus} SetUserStatus={SetUserStatus} />
      </div>
    </>
  );
};

export default Header;
