import React, { useState } from "react";
import Image from "next/image";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: "300",
  subsets: ["serif"],
});

const ubuntuBold = Ubuntu({
  weight: "500",
  subsets: ["serif"],
});

const WorkCard = ({ name, details, url }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`w-full rounded-lg p-4 ${
        ubuntu.className
      } border border-gray-700 ${hovered && "bg-zinc-800"} ${
        hovered ? "text-gray-200" : "text-gray-400"
      } cursor-pointer`}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      <div className="w-full">
        <div
          className={`relative w-full ${false && "grayscale"}`}
          style={{ aspectRatio: "1440 / 778" }}
        >
          <Image
            src={name == "Prept.Ai" ? "/prept-ai-demo.png" : "/gptgo-demo.png"}
            alt="logo"
            fill
            className="object-cover rounded-sm"
          />
        </div>
      </div>
      <div className={`w-full justify-start items-center flex text-base mt-4`}>
        <div className={`${ubuntuBold.className}`}>{name}</div>
      </div>
      <div className="w-full justify-start items-center flex gap-1 text-base mt-4">
        {details}
      </div>
    </div>
  );
};

export default WorkCard;
