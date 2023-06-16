import React from 'react'
import { motion } from "framer-motion";
import EarlyTourEnglish from './EarlyTourEn';
import ExploreTourEnglish from './ExploreTourEn';
import SilentTourEnglish from './SitentTourEn';

type Props = {}

export default function ToursEnglish({}: Props) {
  return (
<div className='p-2 relative text-center -top-10'>
    <motion.div
    initial={{
        y:-100,
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
        y:0,
    }}
    transition={{
        duration: 1.4,
    }}
    ><h3 className='uppercase tracking-[15px]  font-bold text-black pb-2 text-sm md:text-lg'>Join us on a trip!</h3>
        <p className='pb-3 w-[350px] md:w-[700px] text-left mx-auto font-thin md:pb-10'>We can create a trip that will give you a magical experience, among unique mountains that cannot be found anywhere else in Norway. We are locals who know places that are not usually shown with other guides, places that give peace of mind and that give a new view of nature. Contact us and we'll go on a trip! We can give the best tips for a magical adventure at Leka, we have spectacular mountains, unique landscape that cannot be found anywhere else in Norway. And that we know all the places where YOU should see, and other things you can do on the Island. Get in touch with us and we will adapt a trip for you with us or a trip you want alone.</p>
        <h2 className='pb-3 font-medium uppercase text-sm md:text-lg'>Here are some of the tours we offer!</h2>
        </motion.div>
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
     className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-5 justify-evenly mx-auto items-center'>
        
        <div className='scrollBar'>
        <EarlyTourEnglish />
        <ExploreTourEnglish />
        <SilentTourEnglish />

    
        </div>
        </motion.div>
    </div>
   
  )
}

