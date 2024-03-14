import React from 'react'
import Image from 'next/image';

function TheMountain() {
	return (
		<div>
			<div className="flex w-[1100px] h-[600px] items-center justify-center text-white p-4"
        style={{
          backgroundImage: "url('/mountain.png')"
        }}>
        <div className=''>
        	<div className='flex item-end'>
		        <Image src='/name.png' alt="name_img" width={90} height={60} className="rounded-full"/>
		      </div>
		      <div className=''>
		        <p className="text-[30px] font-pockota mb-2 justify-center">
		          Busy building tools for users Don’t be a boilerplate programmer.
			        Instead, build tools for users and other programmers.
			        Take historical note of textile and steel industries:
			        do you want to build machines and tools, or do you want to operate those machines.
		        </p>
		        <p className="text-[20px] font-pockota mb-2 item-end">
		        	— Ras Bodik at the start of his compilers course
		        </p>
		      </div>
		      <div className='mt-8'>
			      <p className="text-center font-inter text-[20px]">
			        The top of one mountain is always the bottom of another.
			      </p>
			      <p className="text-center font-inter text-[15px]">
			       	— Marianne Williamson
			      </p>
			    </div>
			  </div>
      </div>
			
		</div>
	)
}

export default TheMountain;
