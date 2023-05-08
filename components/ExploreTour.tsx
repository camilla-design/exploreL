import React from 'react'
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {}

export default function ExploreTour({}: Props) {
  return (
   
    <div className='relative flex flex-col items-center space-y-1 top-10 z-10'>
        <motion.div 
       initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
    }}

    animate={{
        x: 0,
        opacity: 1,
        scale: 1
    }}

    transition={{
        duration: 1.7,
    }}
        className='top-10 absolute text-center items-center '>
        <h4 className='pt-3 pb-3 font-bold text-3xl text-[#ffa500]'>Explore <span className='text-black'>Leka </span> </h4>
             <p className='font-thin pb-2'>Vi vandrer inn mot jordens indre og tråkker på 500 millioner år gamle bergarter, innover på biter av det Amerikanske kontinentet. </p>
             <p>Turen tar 5-6 timer</p>
             <p className='text-[#00a86b] pt-3 pb-5'>Pris: 990,- pr pers. + 250,- hvis det ønskes tilrettelagt for mat og drikke.</p>
             <Link href="#" className='readMoreButton' >
                <button>Les mer</button>
             </Link>
        </motion.div>
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
    src="explore_img.jpg" />
    
  </div>

        
    
  )
}


/*

<h2 className='pt-20 text-3xl font-bold text-center z-20'>Turerene <span className='font-thin'>vi tilbyr!</span></h2>
        <p className='p-0 text-center z-20'>Vi skreddesyr også turer tilpasset deg, ta kontakt for andre turer.</p>
      <article className='flex flex-col  items-center '>
      <div className='md:px-5 z-20 absolute px-8'>
             <h4 className='pt-3 pb-3 font-bold text-3xl text-[#ffa500]'>Explore <span className='text-black'>Leka </span> </h4>
             <p className='font-thin pb-2'>Vi vandrer inn mot jordens indre og tråkker på 500 millioner år gamle bergarter, innover på biter av det Amerikanske kontinentet. </p>
             <p>Turen tar 5-6 timer</p>
             <p className='text-[#00a86b] pt-3 pb-5'>Pris: 990,- pr pers. + 250,- hvis det ønskes tilrettelagt for mat og drikke.</p>
             <Link href="#" className='readMoreButton' >
                <button>Les mer</button>
             </Link>
         </div>
     
        
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
         className='absolute inset-0 object-cover object-center mx-auto z-0 bottom-0'
         src="explore_img.jpg"/>



         
    </article>

*/