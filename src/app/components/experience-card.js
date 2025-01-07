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
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`w-full rounded-lg p-4 ${
        ubuntu.className
      } border border-gray-700 ${hovered && "bg-zinc-800"} 
      ${hovered ? "text-gray-200" : "text-gray-400"}
      `}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <div className="w-full">
        <div className={`relative w-8 h-8 ${false && "grayscale"}`}>
          <Image
            src={
              companyName == "JP Morgan Chase"
                ? "/JPMC-logo.png"
                : "/USDA-logo.png"
            }
            alt="logo"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div
        className={`w-full justify-between items-center flex text-base mt-4`}
      >
        <div className={`${ubuntuBold.className}`}>{companyName}</div>
        <div className="text-sm">{dates}</div>
      </div>
      <div className="w-full justify-start items-center flex gap-1 text-sm mt-2 italic">
        {role} <GoDotFill className="w-2 h-2" />
        {roleSpecific}
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
