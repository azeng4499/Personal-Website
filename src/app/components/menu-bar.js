import React from "react";
import { IoClose } from "react-icons/io5";
import { Ubuntu } from "next/font/google";
import Link from "next/link";

const ubuntu = Ubuntu({
  weight: "300",
  subsets: ["cyrillic"],
});

const MenuBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-500 ${
          menuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 100 }}
      ></div>
      <div
        className={`fixed top-0 left-0 w-full bg-zinc-800 text-white transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ zIndex: 101 }}
      >
        <div className="px-5 pt-5 sm:px-9">
          <div className="flex justify-end items-center">
            <IoClose
              className="w-10 h-10"
              onClick={() => {
                setMenuOpen(false);
              }}
            />
          </div>
          <div
            className={`text-[2rem] mt-10 mr-2 flex justify-end ${ubuntu.className}`}
          >
            <Link
              href="/about"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              About
            </Link>
          </div>
          <div
            className={`text-[2rem] flex mr-2 justify-end ${ubuntu.className}`}
          >
            <Link
              href="/work"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Work
            </Link>
          </div>
          <div
            className={`text-[2rem] flex mr-2 justify-end mb-16 ${ubuntu.className}`}
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1wqG3oOaqaHXW-Wk65p3-W01sl5cp2U6J/view?usp=sharing",
                "_blank"
              );
            }}
            
          >
            Resume
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
