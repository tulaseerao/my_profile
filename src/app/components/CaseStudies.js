import React from 'react'
import Image from 'next/image';
import { ArrowUpRight } from 'react-feather';
import Link from 'next/link';

const CaseStudies = () => {

  const handleNikhilKrishnan = () => {
    router.push('https://inpharmd.com/blogs/decoding-inpharmd-worlds-revolutionizing-drug-information-with-ai');
  };

  return (
  <div className="bg-black w-full flex flex-col">

    <div className='flex flex-col'>

      <div className="text-[27px] text-white flex flex-col font-bold text-center mt-8">
        Case Studies & Blogs
      </div>
      <div className='flex items-center justify-center flex-col'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 m-4 text-white justify-center items-center'>
          
          <div className='grid grid-rows-3 w-[336px] md:w-[440px] h-[444px] p-[1rem] rounded-xl md:justify-center md:items-center bg-white'>
            <div className='h-[14rem] p-[0.5rem] rounded-xl flex items-center'>
              <Image src="/inpharmd_ai.png" alt='inpharamd ai img' className= 'h-[8rem] rounded-xl flex' width={300} height={100} />
            </div>
            <div className='h-[12rem] p-[0.5rem] grid grid-rows-2 rounded-xl items-center m-1 mt-14'>
              <div className='text-[16px] text-black flex font-bold'> Decoding InpharmD - Revolutionizing Drug Information with AI </div>
              <div className='text-[12px] text-black'>I developed cutting-edge AI architecture with patented technology that seamlessly integrates with our LLM, housing 40 billion parameters with 95% accuracy for our specific needs.</div>
            </div>
            <div className=''>
              <Link href='https://inpharmd.com/blogs/decoding-inpharmd-worlds-revolutionizing-drug-information-with-ai'>
                <button className='h-[2.5rem] px-2 py-2 mt-4 text-white rounded-xl bg-black flex items-center'>
                  Read Case Study
                  <span className='text-white p-1 ml-2'>
                    <ArrowUpRight size={20} />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className='grid grid-rows-3 w-[336px] md:w-[440px] h-[444px] p-[1rem] rounded-xl justify-center items-center bg-white'>
            <div className='h-[14rem] p-[0.5rem] rounded-xl flex items-center'>
              <Image src="/aws_logo.png" alt='inpharamd ai img' className= 'h-[8rem] rounded-xl flex' width={300} height={100} />
            </div>
            <div className='h-[12rem] p-[0.5rem] grid grid-rows-2 rounded-xl items-center m-1 mt-14'>
              <div className='text-[16px] text-black flex font-bold'>AWS’s Best AI Architecture in Machine Learning Blog</div>
              <div className='text-[12px] text-black'>AWS has been essential in accelerating the development of Sherlock. We don’t have to worry as much about scaling, systems maintenance, and stability because AWS takes care of it for us. ........</div>
            </div>
            <div className=''>
              <Link href='https://aws.amazon.com/blogs/machine-learning/how-inpharmd-uses-amazon-kendra-and-amazon-lex-to-drive-evidence-based-patient-care'>
                <button className='h-[2.5rem] px-2 py-2 mt-4 text-white rounded-xl bg-black flex items-center'>
                  Read Case Study
                  <span className='text-white p-1 ml-2'>
                    <ArrowUpRight size={20} />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className='grid grid-rows-3 w-[336px] md:w-[440px] h-[444px] p-[1rem] rounded-xl justify-center items-center bg-white'>
            <div className='h-[14rem] p-[0.5rem] rounded-xl flex items-center'>
              <Image src="/drugs_ai.png" alt='inpharamd ai img' className= 'h-[8rem] rounded-xl flex' width={300} height={100} />
            </div>
            <div className='h-[12rem] p-[0.5rem] grid grid-rows-2 rounded-xl items-center m-1 mt-14'>
              <div className='text-[16px] text-black flex font-bold'>Out of Pocket blog by Nikhil Krishnan</div>
              <div className='text-[12px] text-black'>Nikhil Krishna, creator of the healthcare newsletter "Out of Pocket," with over 40K healthcare provider subscribers, featured our AI and product </div>
            </div>
            <div className=''>
              <Link href='https://www.outofpocket.health/p/clinical-pharmacists-generative-ai-and-inpharmd'>
                <button className='h-[2.5rem] px-2 py-2 mt-4 text-white rounded-xl bg-black flex items-center'>
                  Read Case Study
                  <span className='text-white p-1 ml-2'>
                    <ArrowUpRight size={20} />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className='grid grid-rows-3 w-[336px] md:w-[440px] h-[444px] p-[1rem] rounded-xl justify-center items-center bg-white'>
            <div className='h-[14rem] p-[0.5rem] rounded-xl flex items-center'>
              <Image src="/pinecone.png" alt='inpharamd ai img' className= 'h-[8rem] rounded-xl flex' width={300} height={100} />
            </div>
            <div className='h-[12rem] p-[0.5rem] grid grid-rows-2 rounded-xl items-center m-1 mt-14'>
              <div className='text-[16px] text-black flex font-bold'>Pinecone Case Study:</div>
              <div className='text-[12px] text-black'>Pinecone, the world's largest managed vector database and memory for AI products, appreciated my architecture and featured it on their blog with over 1 million.</div>
            </div>
            <div className=''>
              <Link href='https://docs.google.com/document/d/15btFOi1XRta8BX8Y9qd6TNYCY3ygYuZ3ZDK10CLJZTU/edit'>
                <button className='h-[2.5rem] px-2 py-2 mt-4 text-white rounded-xl bg-black flex items-center'>
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

    <div className='mt-8 flex items-center justify-center flex-col'>

      <div className='grid grid-rows-2 w-[390px] p-[1rem]'>
        <div className="text-[15px] text-white text-center">
          TESTIMONIAL
        </div>
        <div className="text-[28px] text-white text-center">
          People loves my work
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4 m-4 text-white '>
          
        <div className='grid grid-rows-2 w-[336px] h-[375px] p-[1rem] rounded-xl justify-center items-center bg-gray-800'>
          <div className='h-[14rem] p-[0.5rem] rounded-xl text-white text-[16px] flex items-center mt-6'>
            “Tulasee Rao Chintha is an exceptional AI specialist whose innovative work and visionary leadership have made a significant
             impact in the tech industry. His ability to translate complex AI concepts into groundbreaking solutions is remarkable”
          </div>
          
          <div className=''>
            <Link href='https://ashish.com'>
              <button className='h-[2rem] px-2 py-2 mt-4 text-white rounded-xl flex items-center'>
                <Image src="/ashish.png" alt='inpharamd ai img' className= 'rounded-3xl flex' width={70} height={70} />
                <span className='text-white p-1 ml-2'>
                  <div className='grid grid-rows-2 h-[50px] p-[2px] rounded-xl justify-center text-left'>
                    <div className='font-light text-[15px]'>Ashish Advani</div>
                    <div className='font-medium text-[15px]'>Founder, InpharmD</div>
                  </div>
                </span>
              </button>
            </Link>
          </div>
        </div>
          
        <div className='grid grid-rows-2 w-[336px] h-[375px] p-[1rem] rounded-xl justify-center items-center bg-gray-800'>
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

        <div className='grid grid-rows-2 w-[336px] h-[375px] p-[1rem] rounded-xl justify-center items-center bg-gray-800'>
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

      <div className='grid grid-cols-3 gap-4 h-[50px] p-[2px] rounded-xl text-white justify-center items-center'>
        <div className='font-medium text-[15px]'>X</div>
        <div className='font-medium text-[15px]'>Linkdin</div>
        <div className='font-medium text-[15px]'>GitHub</div>
      </div>

    </div>

  </div>
  )
}

export default CaseStudies
