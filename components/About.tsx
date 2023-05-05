import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{
        x:-100,
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
        x:0,
    }}
    transition={{
        duration: 1.4,
    }}
    className='flex flex-col relative  h-screen text-center md:text-left md:flex-row max-w-7xl px-18 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase text-gray-400 pb-2 tracking-[15px] text-sm'>Om oss</h3>
        <div>
        <h4 className='text-2xl text-black font-semibold'>Her er <span className='underline decoration-gray-400'>litt</span>{" "} om oss</h4>
        <p className='text-base p-4 md:p-0 w-[360px] md:w-[400]'  >Explore Leka – Et selskap startet av oss to; Marieann Aune og Lene Reppen Grydeland, fordi vi elsker å være ute på tur, og våre hjerter banker hardt og varmt for Leka. Denne øya er så vakker, magisk og unik! Hva vi ser- og opplever når vi er ute på tur, DET vil vi bidra med å vise frem til dere som besøker Leka. Vi vil dele vår turglede, våre naturopplevelser og vår kjærlighet til Leka med dere.</p>
        </div>

        <div className='px-0 md:px-10'>
        <motion.img
         initial={{
            x: -200,
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
            x: 0,
        }}
        transition={{
            duration: 1.4,
        }}
        viewport={{
            once: true,
        }}
         src="exploreleka-logo-color.png" width={300} className=' mb:mb-0 flex-shrink-0' />
        
        </div>
        </motion.div>
  )
}