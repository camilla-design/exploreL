import React from 'react'
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {}

export default function ExploreTour({}: Props) {
  return (
    <div >
        <article className='flex flex-col rounded-lg items-center space-y-1 bg-gray-100 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[800px] snap-center  p-5  cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
          y: -100,
          opacity: 0,
      }}
      transition={{
          duration: 1.2,
      }}
      whileInView={{
          opacity: 1,
          y: 0,
      }}
      viewport={{
          once: true,
      }}
         className='w-[200px] h-[200px] object-cover object-center rounded-xl'
         src="hero-img-1.jpg"/>

         <div className='px-0 md:px-5 text-black'>
             <h4 className='pt-3 pb-3 font-bold text-xl'>Explore Leka</h4>
             <p className='font-thin'>Lengere vandretur innover øya, se bergarter fra jordens indre.</p>
             <p>Turen tar 5-6 timer</p>
             <p className='text-[#00a86b] pt-3 pb-5'>Pris: 990,- pr pers. + 250,- hvis det ønskes tilrettelagt for mat og drikke.</p>
             <Link href="#" className='readMoreButton' >
                <button>Les mer</button>
             </Link>
         </div>
    </article>
    </div>
  )
}