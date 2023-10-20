import React, { useState } from "react";
import { BiChevronDown, BiChevronRight, BiMenu, BiSearch } from "react-icons/bi";


//components
import SignUp from "../../Auth/Signup";

const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="tetx-xl font-bold">It All starts Here!</h3>
          <span className="text-gray-500 text-sm flex items-center">
            Guntakal <BiChevronRight />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

const NavMd = () => {
  return (
    <div className="w-full flex items-center gap-3 bg-white p-2 rounded-md">
      <BiSearch />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search for movies, events, plays, sports, and Activities "
      />
    </div>
  );
};

const NavLg = ({SignUp}) => {
  return (
    <>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center w-2/5 gap-3">
          <div className="w-12 h-12">
            <img
              src=""
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white p-2 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, plays, sports, and Activities "
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={SignUp} className="px-2 py-1 w-20 text-md font-bold rounded text-white bg-red-600">Login</button>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  const [openSignup, setOpenSignup] = useState(false);
  const openSignUpModal = () => setOpenSignup(true);

  return (
    <>
     <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />
      <nav className="bg-bms-700 p-4">
        <div className="md:hidden">
          {/* Mobile Screen */}
          <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">
          {/* Medium Screen */}
          <NavMd />
        </div>
        <div className="hidden lg:flex">
          {/* Large screen */}
          <NavLg SignUp={openSignUpModal} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
