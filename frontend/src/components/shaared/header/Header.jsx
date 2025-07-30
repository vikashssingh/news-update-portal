import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  // for user
  const { currentUser } = useSelector((state) => state.user);
  // console.log("current user pass", currentUser);// check profilePicture
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
            className="focus:outline-non e bg-transparent w-24 sm:w-64"
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

        {/*condition check  */}
        {currentUser ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div>
                <img
                  src={currentUser.profilePicture}
                  alt="UserProfile"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-60 ml-4">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>

              <DropdownMenuSeparator className="bg-gray-500" />

              <DropdownMenuItem className="block font-semibold text-md">
                <div className="flex flex-col gap-1 ">
                  <span className="">{currentUser.username}</span>
                  <span>{currentUser.email}</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem className="font-semibold text-sm ">
                <Link to="/dashboard?tab=profile ">Profile</Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="font-semibold text-sm">
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link to={"/sign-in"}>
            <Button>Sign In</Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
