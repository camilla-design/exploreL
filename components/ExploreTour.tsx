import React from 'react'
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {}

export default function ExploreTour({}: Props) {
  return (
    <div className='flex flex-col relative p-0 m-0  h-screen text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center' >
    
      <article className='flex flex-col  items-center '>
     
        
        

<div className='md:px-5 z-20 relative px-8'>
             <h4 className='pt-3 pb-3 font-bold text-3xl text-[#ffa500]'>Silent <span className='text-black'>in the night </span> </h4>
             <p className='font-thin pb-2'>Senk skuldrene sammen med sola som går ned i havet, la stresset og hverdagssysler fly avsted med lyden av fuglenes sang, la hjertet finne rytmen i bølgenes skvulp mot svaberget... Bare puste og nyte. Tillat deg selv å bare være.</p>
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
         className='relative inset-0 object-cover object-center mx-auto z-0 bottom-0'
         src="explore_img.jpg"/>

         
    </article>
        
        
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