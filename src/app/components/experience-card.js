import React, { useState } from "react";
import Image from "next/image";
import { Ubuntu } from "next/font/google";
import { GoDotFill } from "react-icons/go";

const ubuntu = Ubuntu({
  weight: "300",
  subsets: ["cyrillic"],
});

const ubuntuBold = Ubuntu({
  weight: "500",
  subsets: ["cyrillic"],
});

const ExperienceCard = ({
  companyName,
  dates,
  role,
  roleSpecific = "",
  details,
  tags = null,
  padding = true,
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`w-full rounded-lg p-4 ${ubuntu.className} border border-zinc-900 bg-zinc-800 text-zinc-200 cursor-pointer hover:bg-zinc-700`}
    >
      <div className="flex h-fit">
        <div className="mt-1">
          <div className="w-11 h-11 rounded-xl overflow-hidden flex justify-center items-center border-1 border-zinc-400 ">
            <div className={`relative ${!padding ? "w-11 h-11" : "w-10 h-10"}`}>
              <Image
                src={`/${companyName.toLowerCase()}-logo.png`}
                alt="logo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 pl-4">
          <div className={`w-full justify-between items-center flex text-base`}>
            <div className={`${ubuntuBold.className}`}>{companyName}</div>
            <div className="text-sm">{dates}</div>
          </div>
          <div className="w-full justify-start items-center flex gap-1 text-sm mt-2 italic">
            {role} <GoDotFill className="w-2 h-2" />
            {roleSpecific}
          </div>
        </div>
      </div>
      <div className="w-full justify-start items-center flex gap-1 text-base mt-4">
        {details}
      </div>
      <div className="w-full justify-start items-center flex gap-1 text-base font-medium mt-4 gap-4">
        {tags &&
          tags.map((t, index) => {
            return (
              <div
                className="px-3 py-1 rounded-full text-xs bg-gray-600 text-zinc-200"
                key={index}
              >
                {t}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ExperienceCard;
