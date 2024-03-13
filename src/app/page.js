import React from "react";
import CaseStudies from "./components/CaseStudies";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#081822]">

      <div className="flex flex-col w-[60%] items-center justify-center text-white p-[75px]"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/bg_img.png')"
        }}>
        <Image src='/tulasee_sir_img.jpg' alt="img" width={90} height={90} className="rounded-full bg-slate-800" style={{ width: 'auto', height: 'auto' }} />
        <p className="font-pockota text-[32px]  my-2">Tulasee Rao Chintha</p>
        <p className="text-[20px] font-pockota mb-2">
          <span>
            InpahrmD
          </span>
          <span>  | </span>
          <span>
            YC W21
          </span>
        </p>
        <p className="text-center font-inter text-[20px]">
          A real AI Specialist(wrote ~10k lines of AI code) | Raised $8.05 millions | AI Patent Holder | LLM&apos;s Expert Built 40 Billion parameters LLM | Advisor to TestGrid.io
        </p>
      </div>

      <div className="bg-[#0003] flex items-center justify-center ">
        <div className="flex flex-col text-white w-[60%] ">
          <p className="text-[32px] font-pockota my-[2rem] text-center ">My Journey </p>
          <p className="text-[22px] font-sf_pro_display font-semibold my-2 "> Farmer to Pharma CTO</p>
          <p className="text-[18px] font-inter my-2">
            My journey began in a tiny sweet green little village in Southern India, aiming to farm. But life steered me towards engineering, and eventually, I became the CTO at Inpharmd. Grateful for this unexpected path that led me to where I am today.
          </p>
          <p className="text-[18px] font-inter my-2">
            My journey spans tech roles in India and Corporate America, leading to co-founding Inpharmd.
          </p>
          <p className="text-[18px] font-inter my-2">
            Built an AI-driven platform transforms healthcare information management, offering precise responses to healthcare professionals. With evidence-based insights, we're making waves in the sector by fostering innovation and driving efficiency like never before, providing them with succinct summaries of literature.
          </p>

          <p className="text-[22px] font-sf_pro_display font-semibold my-2">
            Humble beginnings from zeros to billions
          </p>
          <p className="text-[18px] font-inter my-2">
            In 2018, I co-founded Inpharmd. With seed funding of $8.05M, we quickly reached Series A, boasting a revenue between $4-8M. We now have a vibrant community of over 50k users, including 10k active daily users.
          </p>

          <p className="text-[22px] font-sf_pro_display font-semibold my-2">
            Investor onboard
          </p>
          <p className="text-[18px] font-inter my-2">
            Our recent funding round was backed by some of the most prestigious investors - 645 Ventures, Atlanta Ventures, Y Combinator, & Qlarant Capital
          </p>

          <div className="flex items-center justify-center rounded-xl bg-gradient-to-b from-[#252427] 
          to-[#ececf0] bg-opacity-50 h-[250px] w-full">
          <div></div>
          
          </div>



          <p className="text-[22px] font-sf_pro_display font-semibold my-2">
            Inpharmd CTO
          </p>
          <p className="text-[18px] font-inter my-2">
            As CTO and Co-founder of Inpharmd, I drive technology development, harnessing AI for enhanced patient care and healthcare provider support. I lead web and AI initiatives, processing 30M medical papers, shaping industry advancements.
          </p>
          <p className="text-[18px] font-inter my-2">
            My focus spans technical strategy, team leadership, and product delivery, ensuring top-notch solutions. Committed to healthcare and AI evolution, I aim to sustain impactful innovation. Enthusiastic about our team and Inpharmd's vision, I'm eager to propel positive change in healthcare through cutting-edge approaches.
          </p>
        </div>
      </div>

      <CaseStudies />
      <p className="text-[40px] text-white hover:underline my-4">My Journey </p>
    </div>

  );
}
