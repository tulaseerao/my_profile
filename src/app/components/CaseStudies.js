import React from 'react'
import Image from 'next/image';
import { ArrowUpRight } from 'react-feather';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const CaseStudies = () => {

  const handleNikhilKrishnan = () => {
    router.push('https://inpharmd.com/blogs/decoding-inpharmd-worlds-revolutionizing-drug-information-with-ai');
  };

  return (
    <div className="bg-gradient-to-r from-black-500 to-gray-600 w-full flex flex-col">

      <div className='flex w-full flex-col'>

        <div className="text-[28px] text-white font-pockota text-center m-[4rem]">
          Case Studies & Blogs
        </div>
        <div className='flex items-center justify-center flex-col'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-[2rem] p-4 text-white justify-center items-center'>

            <div className='flex flex-col w-[356px] lg:w-[560px] md:w-[312px] h-[480px] lg:h-[444px] py-[1rem] px-[1rem] rounded-xl mb-[3rem] bg-white'>
              <div className='w-[296px] lg:w-[490px] md:w-[264px] h-[214px] rounded-xl flex items-center m-2'>
                <Image src="/inpharmd_ai.png" alt='inpharamd_ai_img' className='h-[12rem] rounded-xl' width={600} height={150} />
              </div>
              <div className='h-[12rem] p-[0.5rem] grid grid-rows-2 rounded-xl items-center m-1 '>
                <div className='text-[16px] text-black font-semibold font-sf_pro_display'>
                  Decoding InpharmD - Revolutionizing Drug Information with AI
                </div>
                <div className='text-[12px] text-black'>I developed cutting-edge AI architecture with patented technology that seamlessly integrates with our LLM, housing 40 billion parameters with 95% accuracy for our specific needs.
                </div>
              </div>
              <div className='items-start'>
                <a href='https://inpharmd.com/blogs/decoding-inpharmd-worlds-revolutionizing-drug-information-with-ai' target='_blank'>
                  <button className='h-[2.5rem] px-4 py-2 mt-2 ml-1 font-sf_pro_display text-white rounded-full bg-black flex '>
                    Read Case Study
                    <span className='text-white p-1 ml-2'>
                      <ArrowUpRight size={20} />
                    </span>
                  </button>
                </a>
              </div>
            </div>

            <div className='flex flex-col w-[356px] lg:w-[560px] md:w-[312px] h-[480px] lg:h-[444px] py-[1rem] px-[1rem] rounded-xl mb-[3rem] bg-white'>
              <div className='w-[296px] lg:w-[490px] md:w-[264px] h-[214px] rounded-[2rem] flex items-center m-4'>
                <Image src="/aws_logo.png" alt='aws img' className='h-[12rem] rounded-[2rem] flex' width={600} height={150} />
              </div>
              <div className='h-[12rem] p-[0.5rem] grid grid-rows-2 rounded-xl items-center m-1 mt-2'>
                <div className='text-[16px] text-black flex font-semibold font-sf_pro_display'>
                  AWS’s Best AI Architecture in Machine Learning Blog</div>
                <div className='text-[12px] text-black'>AWS has been essential in accelerating the development of Sherlock. We don’t have to worry as much about scaling, systems maintenance, and stability because AWS takes care of it for us. ........</div>
              </div>
              <div className='items-start'>
                <a href='https://aws.amazon.com/blogs/machine-learning/how-inpharmd-uses-amazon-kendra-and-amazon-lex-to-drive-evidence-based-patient-care' target='_blank'>
                  <button className='h-[2.5rem] font-sf_pro_display px-2 py-2 mt-2 text-white rounded-xl bg-black flex'>
                    Read Case Study
                    <span className='text-white p-1 ml-2'>
                      <ArrowUpRight size={20} />
                    </span>
                  </button>
                </a>
              </div>
            </div>

            <div className='flex flex-col w-[356px] lg:w-[560px] md:w-[312px] h-[480px] lg:h-[444px] py-[1rem] px-[1rem] rounded-xl mb-[3rem] bg-white'>
              <div className='w-[296px] lg:w-[490px] md:w-[264px] h-[214px] rounded-[2rem] flex items-center m-4'>
                <Image src="/drugs_ai.png" alt='drugs_ai_img' className='h-[12rem] rounded-xl' width={600} height={150} />
              </div>
              <div className='h-[12rem] p-[0.5rem] grid grid-rows-2 rounded-xl items-center m-1 mt-2'>
                <div className='text-[16px] text-black font-semibold font-sf_pro_display'>
                  Out of Pocket blog by Nikhil Krishnan
                </div>
                <div className='text-[12px] text-black'>Nikhil Krishna, creator of the healthcare newsletter "Out of Pocket," with over 40K healthcare provider subscribers, featured our AI and product </div>
              </div>
              <div className='items-start'>
                <a href='https://www.outofpocket.health/p/clinical-pharmacists-generative-ai-and-inpharmd' target='_blank'>
                  <button className='h-[2.5rem] px-2 py-2 mt-2 text-white font-sf_pro_display rounded-xl bg-black flex'>
                    Read Case Study
                    <span className='text-white p-1 ml-2'>
                      <ArrowUpRight size={20} />
                    </span>
                  </button>
                </a>
              </div>
            </div>

            <div className='flex flex-col w-[356px] lg:w-[560px] md:w-[312px] h-[480px] lg:h-[444px] py-[1rem] px-[1rem] rounded-xl mb-[3rem] bg-white'>
              <div className='w-[296px] lg:w-[490px] md:w-[264px] h-[214px] rounded-[2rem] flex items-center m-4'>
                <Image src="/pinecone.png" alt='pinecone_img' className='h-[12rem] rounded-xl flex' width={600} height={200} />
              </div>
              <div className='h-[12rem] p-[0.5rem] grid grid-rows-2 rounded-xl items-center m-1 mt-2'>
                <div className='text-[16px] text-black font-semibold font-sf_pro_display'>
                  Pinecone Case Study:
                </div>
                <div className='text-[12px] text-black'>Pinecone, the world's largest managed vector database and memory for AI products, appreciated my architecture and featured it on their blog with over 1 million.
                </div>
              </div>
              <div className=''>
                <a href='https://www.pinecone.io/customers/inpharmd/' target='_blank'>
                  <button className='h-[2.5rem] font-sf_pro_display px-2 py-2 mt-2 text-white rounded-xl bg-black flex items-center'>
                    Read Case Study
                    <span className='text-white p-1 ml-2'>
                      <ArrowUpRight size={20} />
                    </span>
                  </button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='mt-8 flex items-center w-full justify-center flex-col'>

        <div className='grid grid-rows-2 w-[336px] md:w-[1170px] p-[1rem]'>
          <div className="text-[12px] font-medium text-[rgb(81,124,101)] text-center">
            TESTIMONIAL
          </div>
          <div className="text-[28px] text-white text-center font-pockota font-bold">
            People loves my work
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 w-[336px] md:w-[1170px] gap-4 p-4 m-6 text-white '>

          <div className='grid grid-rows-2 w-full md:w-[336px] p-4 rounded-2xl justify-center items-center bg-gray-800 border border-white border-opacity-20'>
            <div className='h-[12rem] p-[0.5rem] rounded-xl text-white text-[18px] flex items-center mt-6'>
              “Tulasee Rao Chintha is an exceptional AI specialist whose innovative work and visionary leadership have made a significant
              impact in the tech industry. His ability to translate complex AI concepts into groundbreaking solutions is remarkable”
            </div>
            <div className=''>
              <Link href='#'>
                <button className='h-[2rem] px-2 py-2 mt-4 text-white rounded-xl flex items-center'>
                  <Image src="/ashish.png" alt='inpharamd ai img' className='rounded-full flex' width={70} height={70} />
                  <span className='text-white p-1 ml-2'>
                    <div className='grid grid-rows-2 p-[2px] rounded-xl justify-center text-left'>
                      <div className='font-sf_pro_display text-[16px]'>Ashish Advani</div>
                      <div className='font-sf_pro_display text-[20px]'>Founder, InpharmD</div>
                    </div>
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className='grid grid-rows-2 w-full md:w-[336px] p-4 rounded-2xl justify-center items-center bg-gray-800 border border-white border-opacity-20'>
            <div className='h-[14rem] p-[0.5rem] rounded-xl text-white text-[18px] flex items-center mt-6'>
              “Tulasee has been part of my organization for several years and has shown himself to be an exceptional contributor to our development organization.
              He has a superior command of his subject matter, works well with his team and always brings creative solutions to bear”
            </div>
            <div className=''>
              <Link href='#'>
                <button className='h-[2rem] px-2 py-2 mt-4 text-white rounded-xl flex items-center'>
                  <Image src="/pat_harper.png" alt='inpharamd ai img' className='rounded-full flex' width={70} height={70} />
                  <span className='text-white p-1 ml-2'>
                    <div className='grid grid-rows-2 h-[50px] p-[2px] rounded-xl justify-center items-center text-left'>
                      <div className='font-sf_pro_display text-[16px]'>Pat Harper</div>
                      <div className='font-sf_pro_display text-[20px]'>CTO, Catalis</div>
                    </div>
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className='grid grid-rows-2 w-full md:w-[336px] p-4 rounded-2xl justify-center items-center bg-gray-800 border border-white border-opacity-20'>
            <div className='h-[14rem] p-[0.5rem] rounded-xl text-white text-[18px] flex items-center mt-6'>
              Tulasee is a highly intelligent and competent programmer/developer. He is able to work in complex and results-driven cultures and his attention to each and every
              detail in a development project is brilliant. Tulasee has a knack for investigating and identifying..... <span className='text-[#BEF6A9]'>more</span>
            </div>
            <div className='p-2'>
              <Link href='#'>
                <button className='h-[2rem] px-2 py-2 mt-4 text-white rounded-xl flex items-center'>
                  <Image src="/paul_brobson.png" alt='inpharamd ai img' className='rounded-full flex' width={70} height={70} />
                  <span className='text-white p-1 ml-2'>
                    <div className='grid grid-rows-2 h-[50px] p-[2px] rounded-xl justify-center items-center text-left'>
                      <div className='font-sf_pro_display text-[16px]'>Paul Brobson</div>
                      <div className='font-sf_pro_display text-[20px]'>Founder, Trusted Sale, Inc.</div>
                    </div>
                  </span>
                </button>
              </Link>
            </div>
          </div>

        </div>

        <div className="flex md:w-[1170px] md:h-[832px] md:bg-cover w-auto items-center justify-center rounded-2xl text-white md:p-8"
          style={{
            backgroundImage: "url('/mountain.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minWidth: "50vw" 
          }}>
          <div className='flex flex-col'>
            <div className='flex items-center m-4'>
              <Image src='/name.png' alt="name_img" width={200} height={100} className="rounded-full" />
            </div>
            <div className='mt-28'>
              <p className="text-[25px] font-bold w-1/2 font-pockota mb-2 justify-center">
                Busy building tools for users Don’t be a boilerplate programmer.
                Instead, build tools for users and other programmers.
                Take historical note of textile and steel industries:
                do you want to build machines and tools, or do you want to operate those machines.
              </p>
              <p className="text-[20px] font-pockota mb-2 item-end">
                — Ras Bodik at the start of his compilers course
              </p>
            </div>
            <div className='mt-12'>
              <p className="text-center font-inter font-bold text-[20px]">
                The top of one mountain is always the bottom of another.
              </p>
              <p className="text-center font-inter text-[15px]">
                — Marianne Williamson
              </p>
            </div>
          </div>
        </div>


        <div className='flex gap-4 px-[4rem] py-[1rem] text-[15px] text-white 
        border-t border-gray-200 mt-[2rem]'>

          <Link href='https://twitter.com/tulasirao'>
            <div className='flex'>
              <Image src="/X_logo.png" alt='tulasee_X' className='' width={20} height={20} />
              <span> X </span>
            </div>
          </Link>

          <Link href='https://www.linkedin.com/in/tulaseeraochintha'>
            <div className='flex'>
              <LinkedInIcon />
              <span>Linkedin</span>
            </div>
          </Link>

          <Link href='https://github.com/tulaseerao'>
            <div className='flex'>
              <GitHubIcon className='text-[#989296]' />
              <span>GitHub</span>
            </div>
          </Link>

        </div>

      </div>

    </div>
  )
}

export default CaseStudies;
