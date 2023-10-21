import React, { useContext } from "react";
import { BiChevronDown, BiChevronRight, BiMenu, BiSearch, BiShareAlt } from "react-icons/bi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

//context
import { MovieContext } from "../../context/movie.context";
import SignUp from "../../Auth/Signup";
import logo from "../../assets/logo.jpeg";

const NavSm = () => {
  const {movie} = useContext(MovieContext);

  return (
    <>
      <div className="text-white flex flex-row items-center justify-between">
        <div>
          <h3 className="tetx-xl font-bold">{movie.original_title}</h3>
        </div>
        <div className="w-8 h-8">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

const NavLg = () => {
  return (
    <>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center w-2/5 gap-3">
          <div className="w-8 h-8">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full rounded-sm"
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
          <ConnectButton />
        </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className=" absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-black p-4">
        <div className="lg:hidden">
          {/* Mobile Screen */}
          <NavSm />
        </div>
        <div className="hidden lg:flex">
          {/* Large screen */}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
