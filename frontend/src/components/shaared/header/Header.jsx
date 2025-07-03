import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <nav className="shadow-lg sticky">
      <div className=" flex justify-between items-center max-w-6xl lg:max-w-7xl mx-auto p-4">
        <Link to={"/"}>
          <h1 className="font-bold text-xl  sm:text-2xl flex flex-wrap">
            <span className="text-slate-500">News</span>
            <span className="text-slate-900">Portal</span>
          </h1>
        </Link>

        <form className="p-3 bg-slate-200 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search...."
            className="focus:outline-none bg-transparent w-24 sm:w-64"
          />
          <button>
            <CiSearch className="size-6 text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="hiddden lg:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>

          <Link to={"/about"}>
            <li className="hidden lg:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to={"/news"}>
            <li className="hidden lg:inline text-slate-700 hover:underline">
              News Articles
            </li>
          </Link>
        </ul>
        <Link to={"/sign-in"}>
          <Button>Sign In</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
