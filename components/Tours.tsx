import React from 'react'
import { motion } from "framer-motion";
import EarlyTour from './EarlyTour'
import ExploreTour from './ExploreTour'
import SilentTour from './SitentTour'

type Props = {}

export default function Tours({}: Props) {
  return (

    <div className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full justify-evenly mx-auto items-center '>
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

        

        
        <div className='flex relative pt-20'>

        <div className=' '>
          
            <ExploreTour />
            
            
        
        </div>
        </div>
    </motion.div>
      
    </div>
   
  )
}

/*

  <img src="backround-hero.jpg" className='h-screen absolute inset-0 object-cover object-center mx-auto opacity-[30%]'/>
    
    

 */