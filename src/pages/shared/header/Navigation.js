import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { ImUser } from "react-icons/im";
import { CgMenuGridO } from "react-icons/cg";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineMedicalServices } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Navigation = () => {
  const activeStyle = {
    color: "white",
    backgroundColor: "#4b5563",
  };
  return (
    <div className="md:flex justify-center py-3 items-center space-x-3  hidden">
      <NavLink
        to="/home"
        activeStyle={activeStyle}
        className="hover:text-gray-100  px-3 py-2 rounded-md font-bold hover:bg-gray-600 text-gray-100 transition-all flex items-center"
      >
        <CgMenuGridO className="mr-1 text-xl" />
        Home
      </NavLink>
      <NavLink
        to="/about"
        activeStyle={activeStyle}
        className="hover:text-gray-100 px-3 py-2 rounded-md font-bold hover:bg-gray-600 text-gray-100 transition-all flex items-center"
      >
        <BsInfoCircle className="mr-1 text-xl " />
        About
      </NavLink>
      <NavLink
        to="/services"
        activeStyle={activeStyle}
        className="hover:text-gray-100 px-3 py-2 rounded-md font-bold hover:bg-gray-600 text-gray-100 transition-all flex items-center"
      >
        <MdOutlineMedicalServices className="mr-1 text-xl" />
        Services
      </NavLink>
      <NavLink
        to="/therapists"
        activeStyle={activeStyle}
        className="hover:text-gray-100 px-3 py-2 rounded-md font-bold hover:bg-gray-600 text-gray-100 transition-all flex items-center"
      >
        <ImUser className="mr-1 text-xl" />
        Therapists
      </NavLink>
    </div>
  );
};

export default Navigation;
