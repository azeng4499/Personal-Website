import React, { useState, useEffect } from "react";
import { MdOutlineMenu } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowBack } from "react-icons/md";
import { Ubuntu } from "next/font/google";
import "../globals.css";

const ubuntu = Ubuntu({
  weight: "300",
  subsets: ["cyrillic"],
});

const Navbar = ({ page = "home", setMenuOpen = null }) => {
  const [visible, setVisible] = useState(true);
  const hideAtPosition = 50;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > hideAtPosition) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar flex justify-center items-center py-6 ${
        visible ? "visible" : "hidden"
      }`}
      style={{ zIndex: 99 }}
    >
      <div className="flex justify-center items-center max-w-[1225px] w-full h-fit px-6 sm:px-10 md:px-20">
        <div className="relative w-full h-full flex justify-center items-center hidden md:flex">
          <div className="absolute left-0">
            {page == "home" ? (
              <div
                className="rounded-full overflow-hidden w-10 h-10"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
              >
                <div className="relative w-10 h-10">
                  <Image
                    src="/website-logo.png"
                    alt="logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ) : (
              <Link
                href="/"
                className={`flex justify-center items-center gap-2 ${ubuntu.className} cursor-pointer`}
              >
                <MdOutlineArrowBack /> Return Home
              </Link>
            )}
          </div>
          <div
            className="bg-zinc-800 flex gap-6 px-6 py-2 rounded-lg font-medium border border-gray-700 tracking-wide cursor-pointer text-gray-400"
            style={{ fontSize: "0.9rem" }}
          >
            <div className="cursor-pointer">
              <Link href="/about" className="link">
                About
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link href="/work" className="link">
                Work
              </Link>
            </div>
            <div
              className="cursor-pointer link"
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
        <div className="relative w-full h-full flex justify-between items-start flex md:hidden">
          {page == "home" ? (
            <div
              className="rounded-full overflow-hidden w-10 h-10"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            >
              <div className="relative w-10 h-10">
                <Image
                  src="/website-logo.png"
                  alt="logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ) : (
            <Link
              href="/"
              className={`flex justify-center items-center gap-2 ${ubuntu.className} cursor-pointer mt-1.5`}
            >
              <MdOutlineArrowBack /> Return Home
            </Link>
          )}
          <MdOutlineMenu
            className="w-8 h-8 text-gray-400"
            onClick={() => {
              setMenuOpen(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
