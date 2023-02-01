import * as React from "react";
import { useEffect, useState } from "react";
import Logo from "../../images/logo-header.svg";
import Menu from "./Menu";
import { CSSTransition } from "react-transition-group";
import { humburgerIcon, logo } from "../../../sites-global/global";

type props = {
  c_logos: any;
  c_menus: any;
};

const Nav = (props: any) => {
  const { c_menus, c_logos } = props;

  // console.log("props heare", props);
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  });
  const toggle = () => {
    (document.getElementById("body") as HTMLInputElement).classList.toggle(
      "menu-opened"
    );
  };

  const linkDoms = c_menus?.map((HeaderLinks: any) => (
    // console.log('HeaderLinks', HeaderLinks)
    <a
      className="navbar-item mr-3 gap-9
      
      
      transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-header-cta-bg-color
      "
      href={HeaderLinks?.link}
    >
      <span>{HeaderLinks?.label}</span>
    </a>
  ));

  return (
    <>
      <nav className="p-4 bg-gray-800 text-gray-200 bg-light-grey">
        <div className="flex justify-between items-center">
          <div className="flex items-center pl-8">
            <i className="text-2xl fas fa-campground" />
            <img src={c_logos} alt="Tailwindcss Navigation" className="w-20" />
          </div>
          {/* MOBILE NAV ICON */}
          <div className="md:hidden block absolute top-4 right-8 fixed">
            <button
              aria-label="navigation"
              type="button"
              className="md:hidden text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white"
            >
              <i className="fas fa-bars text-3xl" id="bars" />{" "}
            </button>
          </div>
          {/* NAVIGATION - LARGE SCREENS */}
          <div className="hidden md:flex">
            <ul className="hidden md:flex">
              <li className="text-lg pr-8 ">
                {/* <a
                  href
                  className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                > */}
                <h2>{linkDoms}</h2>
                {/* </a> */}
              </li>
            </ul>
          </div>
          <div className="hidden md:flex">
            <a href="#">
              <i className="fab fa-facebook text-2xl pr-8 transition duration-300 focus:text-yellow-500 hover:text-yellow-500" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin text-2xl pr-8 transition duration-300 focus:text-yellow-500 hover:text-yellow-500" />
            </a>
            <a href="#">
              <i className="fab fa-instagram text-2xl pr-8 transition duration-300 focus:text-yellow-500 hover:text-yellow-500" />
            </a>
            <a href="#">
              <i className="fab fa-twitter text-2xl pr-8 transition duration-300 focus:text-yellow-500 hover:text-yellow-500" />
            </a>
          </div>
        </div>
        {/* MOBILE MENU */}
        <div
          id="mobileMenu"
          className="hidden flex w-full mx-auto py-8 text-center"
        >
          <div className="flex flex-col justify-center items-center w-full">
            <a
              href="#"
              className="block text-gray-200 cursor-pointer py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              style={{
                "-webkit-text-underline-offset": "8px",
                "text-underline-offset": "8px",
              }}
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              style={{
                "-webkit-text-underline-offset": "8px",
                "text-underline-offset": "8px",
              }}
            >
              About
            </a>
            <a
              href="#"
              className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              style={{
                "-webkit-text-underline-offset": "8px",
                "text-underline-offset": "8px",
              }}
            >
              Blog
            </a>
            <a
              href="#"
              className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              style={{
                "-webkit-text-underline-offset": "8px",
                "text-underline-offset": "8px",
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
