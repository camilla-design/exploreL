import React from 'react'
import { motion } from "framer-motion";
import EarlyTour from './EarlyTour'
import ExploreTour from './ExploreTour'
import SilentTour from './SitentTour'

type Props = {}

export default function Tours({}: Props) {
  return (

    <div className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center '>
        <img src="backround-hero.jpg" className='h-screen absolute inset-0 object-cover object-center mx-auto opacity-[30%]'/>
    
    <motion.div 
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1.4,
    }}
    className='h-screen  overflow-hidden flex-col text-lft md:flex-row max-w-full justify-evenly mx-auto items-center'>

        

        <h2 className='pt-20 text-3xl font-bold text-center'>Turerene <span className='font-thin'>vi tilbyr!</span></h2>
        <p className='p-0 text-center'>Vi skreddesyr også turer tilpasset deg, ta kontakt for andre turer.</p>
        <div className='flex relative'>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8C4D16]'>
          
            <ExploreTour />
            <SilentTour />
            <EarlyTour />
            
        
        </div>
        </div>
    </motion.div>
    </div>
   
  )
}

