import React from "react";
import { Ubuntu, Ultra, DM_Serif_Text } from "next/font/google";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import { LuConstruction } from "react-icons/lu";

const ubuntu = Ubuntu({
  weight: "300",
  subsets: ["cyrillic"],
});

const ultra = Ultra({
  weight: "400",
  subsets: ["latin"],
});

const dm_serif = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
});

const WorkCardLarge = ({
  index,
  imagePath,
  title,
  date,
  details,
  buttons,
  WIP = false,
}) => {
  return (
    <div>
      <div className="w-full">
        <div
          className={`${ultra.className} text-[3rem] mb-4`}
          style={{ opacity: 0.3 }}
        >
          0{index}/
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-start items-center">
        <div
          className={`relative w-full lg:h-72 h-fit ${false && "grayscale"}`}
          style={{ aspectRatio: "1440 / 778" }}
        >
          <Image src={imagePath} alt="logo" fill className="object-cover" />
          {WIP && (
            <div className="w-full h-full absolute flex justify-end items-start p-4">
              <div
                className="flex justify-center items-center gap-2 text-white px-3 py-1 border-2 border-black rounded-lg font-bold"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              >
                <LuConstruction className="text-yellow-500" />
                Work in progress
              </div>
            </div>
          )}
        </div>
        <div className="flex-grow w-full h-fit lg:h-72 lg:ml-10 lg:-mt-6 mt-10">
          <div
            className={`${dm_serif.className} text-[1.2rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[1.8rem] flex justify-start items-center gap-3 flex-wrap`}
          >
            {title} <GoDotFill className="w-3 h-3" /> {date}
          </div>
          <div
            className={`${ubuntu.className} text-[0.8rem] sm:text-[1.2rem] md:text-[1.2rem] lg:text-[1rem] italic mt-4 text-gray-400`}
          >
            {details}
          </div>
          <div className={`w-full mt-10 ${ubuntu.className} flex gap-4`}>
            {buttons.map((b, index) => {
              return (
                <div
                  key={index}
                  className="border px-4 py-2 w-fit rounded-lg text-sm cursor-pointer"
                  onClick={() => {
                    window.open(b.url, "_blank");
                  }}
                >
                  {b.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCardLarge;
