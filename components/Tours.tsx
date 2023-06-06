import React from 'react'
import { motion } from "framer-motion";
import EarlyTour from './EarlyTour'
import ExploreTour from './ExploreTour'
import SilentTour from './SitentTour'

type Props = {}

export default function Tours({}: Props) {
  return (

    <div className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-0 uppercase tracking-[15px] text-black pb-2 text-sm'>Turer</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8C4D16'>
        <EarlyTour />
        <ExploreTour />
        <SilentTour />

    
     
        </div>
    </div>
   
  )
}

/*

  <img src="backround-hero.jpg" className='h-screen absolute inset-0 object-cover object-center mx-auto opacity-[30%]'/>
    
    

 */