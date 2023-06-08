import React from 'react'
import { motion } from "framer-motion";
import EarlyTour from './EarlyTour'
import ExploreTour from './ExploreTour'
import SilentTour from './SitentTour'

type Props = {}

export default function Tours({}: Props) {
  return (
<div className='p-2 relative text-center -top-10'><h3 className='uppercase tracking-[15px]  font-bold text-black pb-2 text-sm md:text-lg'>Turer</h3>
        <p className='pb-3 w-[350px] md:w-[450px] mx-auto font-thin md:pb-10'>Velkommen til Explore Leka. Dette er turene vi tilbyr! Ta kontakt for mer informajon om turene, så kan vi skreddersy en tur som passer til deg/dere!</p>
    <div className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-5 justify-evenly mx-auto items-center'>
        
        <div className='scrollBar'>
        <EarlyTour />
        <ExploreTour />
        <SilentTour />

    
        </div>
        </div>
    </div>
   
  )
}

/*

  <img src="backround-hero.jpg" className='h-screen absolute inset-0 object-cover object-center mx-auto opacity-[30%]'/>
    
    

 */