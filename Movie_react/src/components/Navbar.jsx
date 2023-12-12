import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Categories from "./Categories";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState("");
  const [showsearchbar, setShowsearchbar] = useState(false);
  const navigate = useNavigate();

  function searchHandler(event) {
    setSearch(event.target.value);
    console.log(search);
  }
  return (
    <div className="flex w-full justify-between  px-5 sm:px-20 items-center z-20 text-white py-5 text-sm font-bold shadow-md shadow-[transparent]/[0.2] absolute ">


      <div className="flex justify-center items-center gap-16 ">
        {/* logo */}
        <Link to={"/"}>
          <div
            className={
              `px-5 cursor-pointer text-3xl text-red-600 ` +
              (showsearchbar ? "hidden sm:flex" : "flex")
            }
          >
            旅行
          </div>
        </Link>

        {/* other features */}
        <div
          className={`gap-6 ` + (showsearchbar ? "hidden" : "hidden md:flex")}
        >
          <Link to={"/"}>
            <p className="cursor-pointer">HOME</p>
          </Link>
          <Link to={"/Wishlist"}>
            <p className="cursor-pointer">WISHLIST</p>
          </Link>
          <div to={"/Category"} className="group relative">
            <p className={`cursor-pointer hover:text-[14.3px]`}>CATEGORIES</p>
            <Categories className="hidden group-hover:flex"></Categories>
          </div>
          <Link to={"/Login"}>
            <p className="cursor-pointer">LOGIN</p>
          </Link>
          <Link to={"/ContactUs"}>
            <p className="cursor-pointer">ABOUT US</p>
          </Link>
        </div>
      </div>

      {/* input */}
      <div
        className={
          `px-[5px] gap-5 justify-center items-center backdrop-blur-3xl rounded-full shadow-lg shadow-black absolute right-20 flex  `
        }
      >
        <CgSearch
          className="text-xl cursor-pointer"
          onClick={() => {
            if (search !== "") {
              navigate(`/search/${search}`);
            }
          }}
        ></CgSearch>
        <input
          onChange={searchHandler}
          className="w-[100px] sm:w-[350px] bg-transparent outline-none h-[30px]  "
          type="text"
          placeholder=" Search Here"
        />
      </div>

      {/* hamburger */}
      <div>
        <button
          className={
            `items-center justify-center mt-2 text-xl ` +
            (showsearchbar ? "hidden" : " flex md:hidden")
          }
        >
          <GiHamburgerMenu></GiHamburgerMenu>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
