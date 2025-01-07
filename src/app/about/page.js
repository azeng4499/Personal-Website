"use client";

import React, { useState } from "react";
import { GPTGO_URL, PREPT_AI_URL, ISTEAM_URL } from "../constants";
import Image from "next/image";
import Navbar from "../components/navbar";
import { GoDash } from "react-icons/go";
import MenuBar from "../components/menu-bar";

import { Ubuntu, DM_Serif_Text } from "next/font/google";
import "../globals.css";

const ubuntu = Ubuntu({
  weight: "300",
  subsets: ["cyrillic"],
});

const dm_serif = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
});

const Page = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-screen h-fit bg-black flex justify-center items-center">
      <div className="max-w-[1225px] h-full w-full max-w-[1225px] bg-zinc-900 flex overflow-hidden flex-col lg:flex-row min-h-screen">
        <MenuBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Navbar page="about" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="w-full lg:w-1/2 h-full px-10 lg:px-0 -ml-4 sm:-ml-8 sm:px-16 md:px-28 mt-40 flex justify-center items-center lg:items-start flex-col lg:-ml-20 lg:pr-20">
          <div
            className={`relative w-full`}
            style={{
              aspectRatio: "1/1",
              boxShadow: "20px 30px 5px rgba(255, 255, 255, 0.3)",
            }}
          >
            <Image
              src="/aaron-bio.jpg"
              alt="aaron"
              fill
              className="object-cover"
            />
          </div>
          <div
            className={`w-full h-[200px] mt-20 text-gray-400 ml-10 ${ubuntu.className} text-base hidden lg:flex flex-col`}
          >
            <div className=" flex justify-start items-center gap-4 mb-6 ml-20">
              <div className="w-[80px] h-[1px] bg-gray-400"></div>
              <div>Other Facts</div>
            </div>
            <div className=" flex justify-start items-center gap-2 mb-4 ml-20">
              Alma Mater <GoDash />
              University of Maryland&nbsp;&nbsp;🐢
            </div>
            <div className=" flex justify-start items-center gap-2 mb-4 ml-20">
              NFL Team <GoDash /> Ravens&nbsp;&nbsp;💜
            </div>
            <div className=" flex justify-start items-center gap-2 mb-4 ml-20">
              Childhood Sport <GoDash /> Swimming&nbsp;&nbsp;🏊🏼
            </div>
            <div className=" flex justify-start items-center gap-2 ml-20">
              Favorite Language
              <GoDash /> Javascript{" "}
              <div className={`relative w-4 h-4 ${false && "grayscale"}`}>
                <Image
                  src="/Javascript-logo.png"
                  alt="logo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full mt-20 px-6 sm:px-10 md:px-20 lg:px-10 mb-0 lg:mb-16 lg:mt-36">
          <div className={`${dm_serif.className} text-[2rem] sm:text-[3rem]`}>
            My Name is Aaron.
          </div>
          <div
            className={`${ubuntu.className} text-lg mt-10 text-wrap text-gray-400`}
          >
            From an early age, I’ve been driven by a passion for problem solving
            and innovation. Whether I'm building solutions for 5 people or 5000,
            I’ve always sought opportunities to make a difference through
            technology and creativity. This mindset has fueled a series of
            opportunities that have allowed me to develop impactful skills and
            pursue meaningful endeavors, all of which have shaped my personal
            and professional growth.
          </div>

          <div
            className={`${ubuntu.className} text-lg mt-6 text-wrap text-gray-400`}
          >
            In 2019, I was a key contributor to FTC Robotics team #7182, which
            placed first in the Mid-Atlantic region and{" "}
            <span
              className="cursor-pointer underline-offset-2 underline text-gray-300"
              onClick={() => {
                window.open(
                  "https://www.youtube.com/watch?v=yEflyHxzIVM&t=31s&ab_channel=LANBros",
                  "_blank"
                );
              }}
            >
              second at the World Championships.
            </span>
          </div>
          <div
            className={`${ubuntu.className} text-lg mt-6 text-wrap text-gray-400`}
          >
            In 2021, during the height of COVID-19, I conducted research on the
            effects that quarantining would have on people with depression. My
            findings were{" "}
            <span
              className="cursor-pointer underline-offset-2 underline text-gray-300"
              onClick={() => {
                window.open(ISTEAM_URL, "_blank");
              }}
            >
              published in a scientific journal.
            </span>
          </div>
          <div
            className={`${ubuntu.className} text-lg mt-6 text-wrap text-gray-400`}
          >
            In 2023, I built{" "}
            <span
              className="cursor-pointer underline-offset-2 underline text-gray-300"
              onClick={() => {
                window.open(GPTGO_URL, "_blank");
              }}
            >
              GptGO
            </span>
            , a Chrome Extension that allows users to access ChatGPT without
            ever leaving their tab. It received over 30k downloads within its
            first month of launch.
          </div>
          <div
            className={`${ubuntu.className} text-lg mt-6 text-wrap text-gray-400`}
          >
            In 2024, I designed and developed{" "}
            <span
              className="cursor-pointer underline-offset-2 underline text-gray-300"
              onClick={() => {
                window.open(PREPT_AI_URL, "_blank");
              }}
            >
              Prept.Ai
            </span>
            , a website that leverages AI to help job seekers practice and
            refine their interview skills. The platform received financial
            backing from the University of Maryland's Dingman Center for
            Entrepreneurship.
          </div>
          <div
            className={`${ubuntu.className} text-lg mt-6 text-wrap text-gray-400`}
          >
            Today, I see myself as someone who’s always learning. Whether it’s
            developing a skill, refining an idea, or tackling a new project,
            every step I take is rooted in my passion for building things that
            matter.
          </div>
        </div>
        <div
          className={`w-full h-[200px] mt-14 lg:mt-20 text-gray-400 ${ubuntu.className} text-base flex flex-col mb-20 lg:hidden`}
        >
          <div className=" flex justify-start items-center gap-4 mb-6 px-6 sm:px-10 md:px-20">
            <div className="w-[80px] h-[1px] bg-gray-400"></div>
            <div>Other Facts</div>
          </div>
          <div className=" flex justify-start items-center gap-2 mb-4 px-6 sm:px-10 md:px-20">
            Alma Mater <GoDash />
            University of Maryland&nbsp;&nbsp;🐢
          </div>
          <div className=" flex justify-start items-center gap-2 mb-4 px-6 sm:px-10 md:px-20">
            NFL Team <GoDash /> Ravens&nbsp;&nbsp;💜
          </div>
          <div className=" flex justify-start items-center gap-2 mb-4 px-6 sm:px-10 md:px-20">
            Childhood Sport <GoDash /> Swimming&nbsp;&nbsp;🏊🏼
          </div>
          <div className=" flex justify-start items-center gap-2 px-6 sm:px-10 md:px-20">
            Favorite Language
            <GoDash /> Javascript{" "}
            <div className={`relative w-4 h-4 ${false && "grayscale"}`}>
              <Image
                src="/Javascript-logo.png"
                alt="logo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
