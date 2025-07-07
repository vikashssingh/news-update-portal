import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="container max-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3">
        {/*About us */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-gray-400 text-sm text-balance">
            <span className="font-semibold text-md text-green-500">
              Welcome to NewsPortal:
            </span>
            your trusted source for breaking news, top stories, and insightful
            reporting. Stay informed with real-time updates from around the
            world, covering politics, business, technology, entertainment
          </p>
        </div>

        {/*Quick link */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Link</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="ml-6">
              <Link to={"/"} className="hover:text-green-500">
                Home
              </Link>
            </li>
            <li className="ml-4">
              <Link to={"/about"} className="hover:text-green-500">
                About Us
              </Link>
            </li>
            <li className="ml-2">
              <Link to={"/news"} className="hover:text-green-500">
                News Article
              </Link>
            </li>
            <li className="ml-4">
              <Link to={"/contacts"} className="hover:text-green-500">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        {/*conatct us */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-400 text-sm">
            {" "}
            Noida sector: XX, Pin:-XXXXXX
          </p>

          <p className="text-gray-400 text-sm">MobileNo- 952305xxxxx</p>
          <p className="text-gray-400 text-sm"> Email: email@gamil.com</p>
        </div>
      </div>
      {/*social media and copyright */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        <p>Follow Us on</p>
        <div className="flex justify-center space-x-4 mt-3">
          <a href="#" className="hover:text-white">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white">
            <CiLinkedin />
          </a>
          <a href="#" className="hover:text-white">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-white">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-white">
            <FaTwitter />
          </a>
        </div>
        <p className="mt-4">
          {" "}
          &copy; {new Date().getFullYear()} NewsPoratl Vkumar All rights
          reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
