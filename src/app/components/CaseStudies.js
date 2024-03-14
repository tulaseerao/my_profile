import React from 'react'
import Image from 'next/image';
import { ArrowUpRight } from 'react-feather';
import Link from 'next/link';

const CaseStudies = () => {

  const handleNikhilKrishnan = () => {
    router.push('https://inpharmd.com/blogs/decoding-inpharmd-worlds-revolutionizing-drug-information-with-ai');
  };

  return (
  <div className="bg-gradient-to-r from-black-500 to-gray-600 w-full flex flex-col">

    <div className='flex w-full flex-col'>

      <div className="text-[20px] md:text-[22px] lg:text-[28px] text-white flex flex-col font-bold font-pockota text-center m-[4rem]">
        Case Studies & Blogs
      </div>
      <div className='flex items-center justify-center flex-col'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[2rem] p-4 text-white justify-center items-center'>
          
          <div className='flex flex-col w-[356px] lg:w-[560px] md:w-[312px] h-[480px] lg:h-[444px] py-[1rem] px-[1rem] rounded-[2rem] mb-[3rem] bg-white'>
            <div className='w-[296px] lg:w-[490px] md:w-[264px] h-[214px] rounded-[2rem] flex items-center m-4'>
              <Image src="/inpharmd_ai.png" alt='inpharamd_ai_img' className='h-[12rem] rounded-[2rem] flex' width={600} height={150} />
            </div>
            <div className='h-[12rem] p-[0.5rem] grid grid-rows-2 rounded-xl items-center m-1 mt-2'>
              <div className='text-[16px] text-black flex font-bold'> Decoding InpharmD - Revolutionizing Drug Information with AI </div>
              <div className='text-[12px] text-black'>I developed cutting-edge AI architecture with patented technology that seamlessly integrates with our LLM, housing 40 billion parameters with 95% accuracy for our specific needs.</div>
            </div>
            <div className='items-start'>
              <Link href='https://inpharmd.com/blogs/decoding-inpharmd-worlds-revolutionizing-drug-information-with-ai'>
                <button className='h-[2.5rem] px-2 py-2 mt-2 text-white rounded-xl bg-black flex'>
                  Read Case Study
                  <span className='text-white p-1 ml-2'>
                    <ArrowUpRight size={20} />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className='flex flex-col w-[356px] lg:w-[560px] md:w-[312px] h-[480px] lg:h-[444px] py-[1rem] px-[1rem] rounded-[2rem] mb-[3rem] bg-white'>
            <div className='w-[296px] lg:w-[490px] md:w-[264px] h-[214px] rounded-[2rem] flex items-center m-4'>
              <Image src="/aws_logo.png" alt='aws img' className='h-[12rem] rounded-[2rem] flex' width={600} height={150} />
            </div>
            <div className='h-[12rem] p-[0.5rem] grid grid-rows-2 rounded-xl items-center m-1 mt-2'>
              <div className='text-[16px] text-black flex font-bold'>AWS’s Best AI Architecture in Machine Learning Blog</div>
              <div className='text-[12px] text-black'>AWS has been essential in accelerating the development of Sherlock. We don’t have to worry as much about scaling, systems maintenance, and stability because AWS takes care of it for us. ........</div>
            </div>
            <div className='items-start'>
              <Link href='https://aws.amazon.com/blogs/machine-learning/how-inpharmd-uses-amazon-kendra-and-amazon-lex-to-drive-evidence-based-patient-care'>
                <button className='h-[2.5rem] px-2 py-2 mt-2 text-white rounded-xl bg-black flex'>
                  Read Case Study
                  <span className='text-white p-1 ml-2'>
                    <ArrowUpRight size={20} />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className='flex flex-col w-[356px] lg:w-[560px] md:w-[312px] h-[480px] lg:h-[444px] py-[1rem] px-[1rem] rounded-[2rem] mb-[3rem] bg-white'>
            <div className='w-[296px] lg:w-[490px] md:w-[264px] h-[214px] rounded-[2rem] flex items-center m-4'>
              <Image src="/drugs_ai.png" alt='drugs_ai_img' className= 'h-[12rem] rounded-xl flex' width={600} height={150} />
            </div>
            <div className='h-[12rem] p-[0.5rem] grid grid-rows-2 rounded-xl items-center m-1 mt-2'>
              <div className='text-[16px] text-black flex font-bold'>Out of Pocket blog by Nikhil Krishnan</div>
              <div className='text-[12px] text-black'>Nikhil Krishna, creator of the healthcare newsletter "Out of Pocket," with over 40K healthcare provider subscribers, featured our AI and product </div>
            </div>
            <div className='items-start'>
              <Link href='https://www.outofpocket.health/p/clinical-pharmacists-generative-ai-and-inpharmd'>
                <button className='h-[2.5rem] px-2 py-2 mt-2 text-white rounded-xl bg-black flex'>
                  Read Case Study
                  <span className='text-white p-1 ml-2'>
                    <ArrowUpRight size={20} />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className='flex flex-col w-[356px] lg:w-[560px] md:w-[312px] h-[480px] lg:h-[444px] py-[1rem] px-[1rem] rounded-[2rem] mb-[3rem] bg-white'>
            <div className='w-[296px] lg:w-[490px] md:w-[264px] h-[214px] rounded-[2rem] flex items-center m-4'>
              <Image src="/pinecone.png" alt='pinecone_img' className= 'h-[12rem] rounded-xl flex' width={600} height={200} />
            </div>
            <div className='h-[12rem] p-[0.5rem] grid grid-rows-2 rounded-xl items-center m-1 mt-2'>
              <div className='text-[16px] text-black flex font-bold'>Pinecone Case Study:</div>
              <div className='text-[12px] text-black'>Pinecone, the world's largest managed vector database and memory for AI products, appreciated my architecture and featured it on their blog with over 1 million.</div>
            </div>
            <div className=''>
              <Link href='https://docs.google.com/document/d/15btFOi1XRta8BX8Y9qd6TNYCY3ygYuZ3ZDK10CLJZTU/edit'>
                <button className='h-[2.5rem] px-2 py-2 mt-2 text-white rounded-xl bg-black flex items-center'>
                  Read Case Study
                  <span className='text-white p-1 ml-2'>
                    <ArrowUpRight size={20} />
                  </span>
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className='mt-8 flex items-center w-full justify-center flex-col'>

      <div className='grid grid-rows-2 w-[336px] md:w-[1170px] p-[1rem]'>
        <div className="text-[15px] text-white text-center">
          TESTIMONIAL
        </div>
        <div className="text-[28px] text-white text-center">
          People loves my work
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 w-[336px] md:w-[1170px] gap-4 p-4 m-6 text-white '>
          
        <div className='grid grid-rows-2 w-full md:w-[336px] h-[375px] p-4 rounded-2xl justify-center items-center bg-gray-800 border border-white border-opacity-20'>
          <div className='h-[12rem] p-[0.5rem] rounded-xl text-white text-[16px] flex items-center mt-6'>
            “Tulasee Rao Chintha is an exceptional AI specialist whose innovative work and visionary leadership have made a significant
             impact in the tech industry. His ability to translate complex AI concepts into groundbreaking solutions is remarkable”
          </div>
          <div className=''>
            <Link href='#'>
              <button className='h-[2rem] px-2 py-2 mt-4 text-white rounded-xl flex items-center'>
                <Image src="/ashish.png" alt='inpharamd ai img' className= 'rounded-3xl flex' width={70} height={70} />
                <span className='text-white p-1 ml-2'>
                  <div className='grid grid-rows-2 p-[2px] rounded-xl justify-center text-left'>
                    <div className='font-light text-[15px]'>Ashish Advani</div>
                    <div className='font-medium text-[15px]'>Founder, InpharmD</div>
                  </div>
                </span>
              </button>
            </Link>
          </div>
        </div>
          
        <div className='grid grid-rows-2 w-full md:w-[336px] h-[375px] p-4 rounded-2xl justify-center items-center bg-gray-800 border border-white border-opacity-20'>
          <div className='h-[14rem] p-[0.5rem] rounded-xl text-white text-[16px] flex items-center mt-6'>
            “Tulasee has been part of my organization for several years and has shown himself to be an exceptional contributor to our development organization. 
            He has a superior command of his subject matter, works well with his team and always brings creative solutions to bear”
          </div>
          <div className=''>
            <Link href='#'>
              <button className='h-[2rem] px-2 py-2 mt-4 text-white rounded-xl flex items-center'>
                <Image src="/pat_harper.png" alt='inpharamd ai img' className= 'rounded-3xl flex' width={70} height={70} />
                <span className='text-white p-1 ml-2'>
                  <div className='grid grid-rows-2 h-[50px] p-[2px] rounded-xl justify-center items-center text-left'>
                    <div className='font-light text-[15px]'>Pat Harper</div>
                    <div className='font-medium text-[15px]'>CTO, Catalis</div>
                  </div>
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className='grid grid-rows-2 w-full md:w-[336px] h-[375px] p-4 rounded-2xl justify-center items-center bg-gray-800 border border-white border-opacity-20'>
          <div className='h-[14rem] p-[0.5rem] rounded-xl text-white text-[16px] flex items-center mt-6'>
            Tulasee is a highly intelligent and competent programmer/developer. He is able to work in complex and results-driven cultures and his attention to each and every 
            detail in a development project is brilliant. Tulasee has a knack for investigating and identifying..... more
          </div>
          <div className='p-2'>
            <Link href='#'>
              <button className='h-[2rem] px-2 py-2 mt-4 text-white rounded-xl flex items-center'>
                <Image src="/paul_brobson.png" alt='inpharamd ai img' className= 'rounded-3xl flex' width={70} height={70} />
                <span className='text-white p-1 ml-2'>
                  <div className='grid grid-rows-2 h-[50px] p-[2px] rounded-xl justify-center items-center text-left'>
                    <div className='font-light text-[15px]'>Paul Brobson</div>
                    <div className='font-medium text-[15px]'>Founder, Trusted Sale, Inc.</div>
                  </div>
                </span>
              </button>
            </Link>
          </div>
        </div>

      </div>

      <div className='grid grid-cols-3 gap-4 w-[336px] md:w-[1170px] h-[50px] p-[4rem] text-[15px] justify-center items-center text-white border-t border-gray-200 my-2 '>

        <div className=''>
          <Link href='https://twitter.com/tulasirao'>
            <Image src="/X_logo.png" alt='tulasee_X' className= 'flex' width={20} height={20} />
            <span> X </span>
          </Link>
        </div>
        <div className=''>
          <Link href='https://www.linkedin.com/in/tulaseeraochintha'>
            <Image src="/linkedin.png" alt='tulasee_X' className= 'flex bg-white' width={20} height={20} />
            <span>Linkedin</span>
          </Link>
        </div>
        <div className=''>
          <Link href='https://github.com/tulaseerao'>
            <Image src="/gitHub.png" alt='tulasee_X' className= 'flex' width={20} height={20} />
            <span>GitHub</span>
          </Link>
        </div>
      </div>

    </div>

  </div>
  )
}

export default CaseStudies;
