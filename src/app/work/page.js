"use client";

import React, { useState } from "react";
import {
  GPTGO_URL,
  PREPT_AI_URL,
  CXUCOACHING_URL,
  BRICKIFY_LAB_URL,
  GPTGO_URL_GH,
  CXUCOACHING_URL_GH,
  BRICKIFY_LAB_URL_GH,
} from "../constants";
import MenuBar from "../components/menu-bar";
import Navbar from "../components/navbar";
import "../globals.css";
import WorkCardLarge from "../components/work-card-large";

const page = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="w-screen h-fit bg-zinc-900 flex justify-center items-center">
        <div className="max-w-[1225px] h-full w-full max-w-[1225px] bg-zinc-900 flex overflow-hidden flex-col min-h-screen">
          <MenuBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Navbar page="about" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className="w-full h-fit mt-36 flex px-6 sm:px-10 md:px-20 flex-col gap-16 md:gap-8 lg:gap-16 mb-20">
            <WorkCardLarge
              index="1"
              imagePath="/prept-ai-demo-2.png"
              title="Prept.Ai"
              date="2024"
              details="Online platform designed to assist job-seekers in practicing their interview skills. Users record themselves answering questions and receive AI-generated feedback. Leverages various LLM models to provide a quick and personalized analysis to users."
              buttons={[{ url: PREPT_AI_URL, name: "Visit Project" }]}
            />
            <WorkCardLarge
              index="2"
              imagePath="/gptgo-demo.png"
              title="GptGo Chrome Ext."
              date="2023"
              details="Chrome extension to access ChatGPT from any webpage without having to switch tabs. Integrates Chrome Developer APIs for native features such a displaying ChatGPT’s response as a notification and running process threads in the background."
              buttons={[
                { url: GPTGO_URL, name: "Visit Product" },
                { url: GPTGO_URL_GH, name: "View Source Code" },
              ]}
            />
            {/* <WorkCardLarge
              index="3"
              imagePath="/cxucoaching-demo.png"
              title="Cong Xu Coaching"
              date="2022"
              details="Freelanced website for a local life coaching business. Complete end-to-end with a firebase database and booking functionality."
              buttons={[
                { url: CXUCOACHING_URL, name: "Visit Page" },
                { url: CXUCOACHING_URL_GH, name: "View Source Code" },
              ]}
            /> */}
            <WorkCardLarge
              index="3"
              imagePath="/brickify-lab-demo.png"
              title="Brickify Lab"
              date="2022"
              details="Recreate any image out of Legos using Lego Mosiac pieces. Includes multiple color distancing algorithms like DeltaE76, DeltaEITP, and DeltaECMC for optimal results."
              buttons={[
                { url: BRICKIFY_LAB_URL, name: "Visit Project" },
                { url: BRICKIFY_LAB_URL_GH, name: "View Source Code" },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
