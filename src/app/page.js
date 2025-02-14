"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head.js";
import {
  ISTEAM_URL,
  I95_BUSINESS_URL,
  BALTIMORE_SUN_URL,
  PREPT_AI_URL,
  GPTGO_URL,
} from "./constants.js";
import "./globals.css";
import {
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaGithub,
  FaFolder,
} from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { PiShuffleAngular } from "react-icons/pi";
import Navbar from "./components/navbar";
import ExperienceCard from "./components/experience-card";
import WorkCard from "./components/work-card";
import {
  Ubuntu,
  Sofadi_One,
  Knewave,
  Tinos,
  Alumni_Sans_Pinstripe,
  Barrio,
  Iceland,
  DM_Serif_Text,
} from "next/font/google";
import FeaturedCard from "./components/featured-card";
import Link from "next/link";
import MenuBar from "./components/menu-bar";

const ubuntu = Ubuntu({
  weight: "300",
  subsets: ["cyrillic"],
});

const sofadiOne = Sofadi_One({
  weight: "400",
  subsets: ["latin"],
});

const knewave = Knewave({
  weight: "400",
  subsets: ["latin"],
});

const tinos = Tinos({
  weight: "400",
  subsets: ["cyrillic"],
});

const alumniSansPinstripe = Alumni_Sans_Pinstripe({
  weight: "400",
  subsets: ["cyrillic"],
});

const barrio = Barrio({
  weight: "400",
  subsets: ["latin"],
});

const iceland = Iceland({
  weight: "400",
  subsets: ["latin"],
});

const dm_italic = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
});

const fontArray = [
  sofadiOne,
  knewave,
  tinos,
  alumniSansPinstripe,
  barrio,
  iceland,
];

const getCurrentTime = () => {
  const now = new Date();

  const options = {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const timeString = now.toLocaleString("en-US", options);
  return timeString;
};

export default function Home() {
  const [rolling, setRolling] = useState(false);
  const [font, setFont] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [fontIndex, setFontIndex] = useState(Math.floor(Math.random() * 7));

  useEffect(() => {
    if (typeof window !== "undefined") {
      playFontAnimation();
    }
  }, []);

  const playFontAnimation = async () => {
    setRolling(true);
    const randomNumber = 13;

    for (let i = 1; i <= randomNumber; i++) {
      const newIndex = (fontIndex + i) % fontArray.length;
      setFont(fontArray[newIndex]);

      if (i === randomNumber) {
        setFontIndex(newIndex);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }
    setRolling(false);
  };

  return (
    <>
      <Head>
        <title>hello</title>
      </Head>
      <div className="bg-black w-screen flex justify-center items-center">
        <div className="w-full max-w-[1225px] h-full bg-zinc-900">
          <MenuBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className="w-full mt-32 px-6 sm:px-10 md:px-20 py-8">
            <div
              className={`text-base sm:text-lg flex justify-start items-center gap-2 ${ubuntu.className}`}
            >
              It is currently
              <div className="font-bold">{getCurrentTime()}</div> in Maryland.
            </div>
            <div className="text-lg flex justify-start items-center gap-2 mt-16 h-24">
              <div className="flex flex-col text-[3rem] sm:text-[4rem] lg:text-[5rem] lg:flex-row lg:justify-end lg:items-end">
                <div className="sm:mt-16 lg:mt-0">Hi 👋🏼 I&apos;m&nbsp;</div>
                <div
                  className={`${
                    font && font.className
                  } mt-10 sm:mt-12 sm:mb-20 lg:mt-0 lg:mb-0 flex h-8 lg:h-fit`}
                >
                  Aaron Zeng{" "}
                  {!rolling && (
                    <div
                      className="ml-4 rounded-full bg-zinc-700 flex lg:hidden bg-red-400 justify-center items-center w-6 h-6"
                      onClick={() => {
                        playFontAnimation();
                      }}
                    >
                      <PiShuffleAngular className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
              {!rolling && (
                <div
                  className="ml-4 p-1 rounded-full bg-zinc-700 hidden lg:flex"
                  onClick={() => {
                    playFontAnimation();
                  }}
                >
                  <PiShuffleAngular className="w-4 h-4" />
                </div>
              )}
            </div>
            <div
              className={`text-lg flex justify-start items-center gap-2 mt-16 w-full md:w-4/5 lg:w-2/3 text-gray-400 ${ubuntu.className}`}
            >
              I&apos;m a software engineer and designer based in College Park,
              Maryland. I currently work at JPMC, using machine learning to make
              their customer support proccesses more efficent. I also created
              Prept.Ai, a website that helps people prepare for interviews using
              the power of Artifical Intelligence.
            </div>
            <div className="flex justify-start items-center gap-6 mt-10 text-gray-500 text-xl">
              <FaLinkedin />
              <FaGithub />
              <FaInstagram />
              <FaTiktok />
            </div>
          </div>
          <div className="w-full mt-8 text-gray-400 flex flex-col lg:flex-row">
            <div className="w-full h-full px-6 sm:px-10 md:px-20 lg:pl-20 lg:pr-10">
              <div className=" flex justify-start items-center gap-4 mb-8">
                <div className="w-[80px] h-[1px] bg-gray-400"></div>
                <div className={`${ubuntu.className}`}>Experience</div>
              </div>
              <div className="flex flex-col gap-4">
                <ExperienceCard
                  tags={["Spark", "Pandas", "AWS"]}
                  companyName="JP Morgan Chase"
                  dates="May 2024 - Aug 2024"
                  role="SWE Intern"
                  roleSpecific="Machine Learning"
                  details="Contributed to the Machine Learning & Intelligent Operations department using Python to work on AI tools that enhance the efficiency of the company’s customer support processes."
                />
                <ExperienceCard
                  tags={["Javascript", "SpringBoot"]}
                  companyName="JP Morgan Chase"
                  dates="May 2023 - Aug 2023"
                  role="SWE Intern"
                  roleSpecific="Full Stack"
                  details="Contributed to the Finance Risk & Data Controls department, using React to work on tools that help the company generate quarterly reports and other financial documents."
                />
                <ExperienceCard
                  tags={["React", "Tailwind"]}
                  companyName="US Dep. of Agriculture"
                  dates="May 2022 - May 2023"
                  role="SWE Intern"
                  roleSpecific="Frontend"
                  details="Aided the design and development of a dashboard where farmers participating in USDA research studies can read and write crop data."
                />
                <div
                  className={`w-full flex justify-center items-center gap-2 bg-zinc-800 py-2 rounded-lg ${ubuntu.className} cursor-pointer`}
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1wqG3oOaqaHXW-Wk65p3-W01sl5cp2U6J/view?usp=sharing",
                      "_blank"
                    );
                  }}
                >
                  View Full Resume <GrView />
                </div>
              </div>
            </div>
            <div className="w-full h-full  px-6 sm:px-10 md:px-20 lg:pr-20 lg:pl-10 mt-16 lg:mt-0">
              <div className=" flex justify-start items-center gap-4 mb-8">
                <div className="w-[80px] h-[1px] bg-gray-400"></div>
                <div className={`${ubuntu.className}`}>Highlighted Work</div>
              </div>
              <div className="flex flex-col gap-4">
                <WorkCard
                  url={PREPT_AI_URL}
                  name="Prept.Ai"
                  details="Online platform designed to assist job-seekers in practicing their interview skills. Users to record themselves answering questions and receive AI-generated feedback. Backed by the UMD Dingman Center for Entrepreneurship."
                />
                <WorkCard
                  url={GPTGO_URL}
                  name="GptGO Chrome Ext."
                  details="Chrome extension that allows users to access ChatGPT from any webpage without having to switch tabs. Accumulated over 30 thousand users within the first month of launch."
                />
                <Link
                  href="/work"
                  className={`w-full flex justify-center items-center gap-2 bg-zinc-800 py-2 rounded-lg ${ubuntu.className}`}
                >
                  <div className="flex justify-center items-center gap-2">
                    Go to All Work <FaFolder />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/5 lg:w-2/3 px-6 sm:px-10 md:px-20 my-16 text-gray-400">
            <div className=" flex justify-start items-center gap-4 mb-8">
              <div className="w-[80px] h-[1px] bg-gray-400"></div>
              <div className={`${ubuntu.className} `}>Featured In</div>
            </div>
            <div className="flex flex-col gap-8 sm:gap-4">
              <FeaturedCard
                url={ISTEAM_URL}
                picturePath="/isteam-cover.png"
                title="ISTEAM Communications"
                date="October 2020"
                details="The Effects of Quarantine on Depression"
              />

              <FeaturedCard
                url={I95_BUSINESS_URL}
                picturePath="/i95-business-cover.png"
                date="March 2019"
                title="I95 Business"
                details="Mechanical Paradox Cubed wins at MD State FTC Championships"
              />
              <FeaturedCard
                url={BALTIMORE_SUN_URL}
                picturePath="/baltimore-sun-cover.png"
                date="April 2019"
                title="Baltimore Sun"
                details="Mt. Hebron wins fifth consecutive Howard County Invitational swimming title"
              />
            </div>
          </div>
          <div className="w-full px-6 sm:px-10 md:px-20 my-16 text-gray-400">
            <div className=" flex justify-start items-center gap-4 mb-8">
              <div className="w-[80px] h-[1px] bg-gray-400"></div>
              <div className={`${ubuntu.className} `}>Get In Touch</div>
            </div>
            <div className="flex justify-start items-center flex-col">
              <div
                className={`text-[1.2rem] sm:text-[1.6rem] md:text-[2rem] lg:text-[2.2rem] w-full overflow-hidden whitespace-nowrap italic text-gray-600 ${dm_italic.className}`}
              >
                email me at{" "}
                <span className="text-gray-400">aaronz2003@gmail.com</span>{" "}
                email me at{" "}
                <span className="text-gray-400">aaronz2003@gmail.com</span>
              </div>
              <div
                className={`text-[1.2rem] sm:text-[1.6rem] md:text-[2rem] lg:text-[2.2rem] w-full overflow-hidden whitespace-nowrap italic text-gray-600 ${dm_italic.className}`}
              >
                <span className="text-gray-400">aaronz2003@gmail.com</span>{" "}
                email me at{" "}
                <span className="text-gray-400">aaronz2003@gmail.com</span>{" "}
                email me at{" "}
                <span className="text-gray-400">aaronz2003@gmail.com</span>
              </div>
              <div
                className={`text-[1.2rem] sm:text-[1.6rem] md:text-[2rem] lg:text-[2.2rem] w-full overflow-hidden whitespace-nowrap italic text-gray-600 ${dm_italic.className}`}
              >
                <span className="text-gray-400">gmail.com</span> email me at{" "}
                <span className="text-gray-400">aaronz2003@gmail.com</span>{" "}
                email me at{" "}
                <span className="text-gray-400">aaronz2003@gmail.com</span>{" "}
                email me at{" "}
                <span className="text-gray-400">aaronz2003@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
