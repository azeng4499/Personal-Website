import React from "react";
import Image from "next/image";
import { Ubuntu } from "next/font/google";
const ubuntuBold = Ubuntu({
  weight: "500",
  subsets: ["cyrillic"],
});

const FeaturedCard = ({ title, details, date, picturePath, url }) => {
  return (
    <div className="flex w-full">
      <div
        className={`relative hidden sm:flex ${false && "grayscale"} h-28`}
        style={{ aspectRatio: "16 / 9" }}
      >
        <Image
          src={picturePath}
          alt="logo"
          fill
          className="object-cover rounded-sm"
        />
      </div>
      <div className={`flex-grow h-full px-0 text-base sm:ml-6`}>
        <div
          className={`cursor-pointer  ${ubuntuBold.className} underline underline-offset-4`}
          onClick={() => {
            window.open(url, "_blank");
          }}
        >
          {details}
        </div>
        <div className="mt-4 text-base">
          {title} - <span className="italic">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
