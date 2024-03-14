'use client'
import React, { useEffect } from "react";
import CaseStudies from "./components/CaseStudies";
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

  useEffect(() => {
    AOS.init({
      delay: 0,
      duration: 400,
      easing: "ease",
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-[#151718] cursor-default">

      <div className="flex flex-col w-[60%] items-center justify-center text-white p-[75px]"
        data-aos="fade-up"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/bg_img.png')"
        }}>
        <Image src='/tulasee_sir_img.jpg' alt="img" width={90} height={90} className="rounded-full bg-slate-800" style={{ width: 'auto', height: 'auto' }} />
        <p className="font-pockota text-[32px]  my-2">Tulasee Rao Chintha</p>
        <p className="text-[20px] font-pockota mb-[20px]">
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

          <div data-aos="fade-up">
            <p className="text-[22px] font-sf_pro_display font-semibold my-2 ">👨‍🌾 Farmer to Pharma CTO</p>
            <p className="text-[18px] font-inter my-4">
              My journey began in a tiny sweet green little village in Southern India, aiming to farm. But life steered me towards engineering, and eventually, I became the CTO at Inpharmd. Grateful for this unexpected path that led me to where I am today.
            </p>
            <p className="text-[18px] font-inter my-2">
              My journey spans tech roles in India and Corporate America, leading to co-founding Inpharmd.
            </p>
            <p className="text-[18px] font-inter my-2">
              Built an AI-driven platform transforms healthcare information management, offering precise responses to healthcare professionals. With evidence-based insights, we're making waves in the sector by fostering innovation and driving efficiency like never before, providing them with succinct summaries of literature.
            </p>
          </div>

          <div data-aos="fade-up">
            <p className="text-[22px] font-sf_pro_display font-semibold my-4">
              💰Humble beginnings from zeros to billions
            </p>
            <p className="text-[18px] font-inter my-2">
              In 2018, I co-founded Inpharmd. With seed funding of $8.05M, we quickly reached Series A, boasting a revenue between $4-8M. We now have a vibrant community of over 50k users, including 10k active daily users.
            </p>
          </div>

          <div className="mb-2" data-aos="fade-up">
            <p className="text-[22px] font-sf_pro_display font-semibold my-4">
              👨‍💼 Investor onboard
            </p>
            <p className="text-[18px] font-inter my-2">
              Our recent funding round was backed by some of the most prestigious investors - 645 Ventures, Atlanta Ventures, Y Combinator, & Qlarant Capital
            </p>
          </div>

          <div className="flex my-4 items-center justify-center gap-[4rem] rounded-xl
           bg-gradient-to-br from-[#1d1c1d] 
          to-[#353536] bg-opacity-50 py-[4rem] w-full" data-aos="fade-up">

            <a href="https://www.ycombinator.com/companies/inpharmd" target="_blank" className='flex items-center justify-center border-[2px] border-gray-700 p-[2rem] rounded-xl
          bg-gradient-to-b from-[#252427] to-[#424242] shadow-xl cursor-pointer'>
              <Image src='/yc_logo.png' alt="img" width={50} height={50} className="rounded-full bg-slate-800" style={{ width: 'auto', height: 'auto' }} />
            </a>

            <a href="https://645ventures.com/databases/portfolio/inpharmd" target="_blank" className='flex items-center justify-center border-[2px] border-gray-700 p-[2rem] rounded-xl
          bg-gradient-to-b from-[#252427] to-[#424242] shadow-xl cursor-pointer'>
              <Image src='/645.png' alt="img" width={50} height={50} className="rounded-full bg-slate-800" style={{ width: 'auto', height: 'auto' }} />
            </a>

            <a href="https://www.atlantaventures.com/news/why-we-invested-in-inpharmd" target="_blank" className='flex items-center justify-center border-[2px] border-gray-700 p-[2rem] rounded-xl
            bg-gradient-to-b from-[#252427] to-[#424242] shadow-xl cursor-pointer'>
              <Image src='/atl.png' alt="img" width={50} height={50} className="rounded-full bg-slate-800" style={{ width: 'auto', height: 'auto' }} />
            </a>

            <a href="https://www.qlarant.com/about/news/qlarant-capital-becomes-investor-in-inpharmd/" target="_blank" className='flex items-center justify-center border-[2px] border-gray-700 p-[2rem] rounded-xl
          bg-gradient-to-b from-[#252427] to-[#424242] shadow-xl cursor-pointer'>
              <Image src='/qlarant.png' alt="img" width={50} height={50} className="rounded-full bg-slate-800" style={{ width: 'auto', height: 'auto' }} />
            </a>

          </div>

          <div className="mb-[3rem]" data-aos="fade-up">
            <p className="text-[22px] font-sf_pro_display font-semibold mb-6 mt-6">
              👨‍💼 Inpharmd CTO
            </p>
            <p className="text-[18px] font-inter my-4">
              As CTO and Co-founder of Inpharmd, I drive technology development, harnessing AI for enhanced patient care and healthcare provider support. I lead web and AI initiatives, processing 30M medical papers, shaping industry advancements.
            </p>
            <p className="text-[18px] font-inter my-b">
              My focus spans technical strategy, team leadership, and product delivery, ensuring top-notch solutions. Committed to healthcare and AI evolution, I aim to sustain impactful innovation. Enthusiastic about our team and Inpharmd's vision, I'm eager to propel positive change in healthcare through cutting-edge approaches.
            </p>
          </div>

        </div>
      </div>

      <div className="flex flex-col w-[60%] items-center justify-center text-white p-[75px]"
        data-aos="fade-up"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/bg_img.png')"
        }}>

        <span className="text-[32px] font-pockota my-[2rem]" >About InpharmD</span>
        <p className="text-[18px] font-inter my-[2rem]" >
          <span className="text-orange-600"> InpharmD </span>  answers complex questions about drugs by using a combination of generative AI and a clinical pharmacist. Clinicians can ask questions about whether a drug is right to give a patient, dosage and side effect questions, and what to do if a drug is not on hand. Hospital committees (P&T) that decide which drugs to use can generate reports on cost-effectiveness of drugs.
        </p>

        <p className="text-[18px] font-inter mb-[2rem]">
          “My co-founder Tulasee led the way in AI advancements, helping us transcribe PDFs faster than our pharmacists, though still refining accuracy. With 5,000 study abstracts as our foundation, we've fine-tuned algorithms to match our abstracts. Testing at 94% against humans, we aim for 100% accuracy in medical data reliability. Introducing Sherlock, our answer to missed opportunities like Watson. Partnering with ASHP, we're integrating 1,300 vetted drug monographs, enabling Sherlock to provide precise answers at the point of care. Excited to revolutionize healthcare decisions with seamless AI integration”
        </p>

        {/* Video */}
        <div
          className="flex  items-center justify-center mx-auto my-[2rem]"
          data-aos="fade-up"
        >
          <video
            className="h-[10rem] sm:h-[20rem] xl:h-[25rem] 2xl:h-[25rem] rounded-xl"
            preload="none"
            autoPlay
            loop
            muted
          >
            <source src="video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <button className="font-sf_pro_display border-[4px] font-medium text-[24px] bg-white text-black rounded-xl px-4 py-2 shadow-xl" data-aos="fade-up">
          Patented AI Algorithm
        </button>

      </div>

      <CaseStudies />

      <p className="text-[40px] text-white hover:underline my-4 font-pockota" data-aos="fade-up">
        My Journey
      </p>

      <button data-aos="fade-up"
        className="font-sf_pro_display text-[12px] font-semibold bg-white text-black rounded-xl px-4 py-2 shadow-xl sticky left-[98%] bottom-2"
        onClick={() => window.open('https://www.framer.com/?utm_campaign=freeplanbadge&utm_source=https%3A%2F%2Ftulasee.framer.website', '_blank')}
      >
        Made in Framer
      </button>

    </div>

  );
}
