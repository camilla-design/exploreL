import React from 'react'
import { motion } from "framer-motion";
import EarlyTour from './EarlyTour'
import ExploreTour from './ExploreTour'
import SilentTour from './SitentTour'

type Props = {}

export default function Tours({}: Props) {
  return (

    <div className='h-screen flex relative '>
      <ExploreTour />
      
    </div>
   
  )
}

/*

  <img src="backround-hero.jpg" className='h-screen absolute inset-0 object-cover object-center mx-auto opacity-[30%]'/>
    
    

 */