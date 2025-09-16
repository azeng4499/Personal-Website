import React, { useState } from "react";
import Image from "next/image";
import { Ubuntu } from "next/font/google";
import { LuConstruction } from "react-icons/lu";

const ubuntu = Ubuntu({
  weight: "300",
  subsets: ["cyrillic"],
});

const ubuntuBold = Ubuntu({
  weight: "500",
  subsets: ["cyrillic"],
});

const WorkCard = ({ name, details, url, WIP = false }) => {
  return (
    <div
      className={`w-full rounded-lg p-4 ${ubuntu.className} border border-zinc-900 bg-zinc-800 text-zinc-200 cursor-pointer hover:bg-zinc-700`}
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
            src={
              name == "Prept.Ai" ? "/prept-ai-demo-2.png" : "/harbor-demo.png"
            }
            alt="logo"
            fill
            className="object-cover rounded-sm"
          />
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
