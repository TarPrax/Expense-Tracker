import Logo from "./HedaerFiles/Logo";
import { useState } from "react";
import { X, Menu } from "lucide-react";
const Header1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" bg-[#504B38] text-[#F8F3D9] shadow-md">
      <div className="mx-auto py-1 px-4 sm: px-6 md: px-8 lg:px-10 flex justify-between">
        <div className="Logo">
          <Logo />
        </div>

        <div className="">
          <ul className="hidden sm:flex space-x-6">
            <li>Home</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className=" sm:mx-2 md:mx-4 lg: mx-8">
          <a>Login/Sinup</a>
        </div>

        <button className="sm:hidden " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {isOpen && (
          <div className="">
            <ul className="sm:hidden  ">
              <li>Home</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header1;
