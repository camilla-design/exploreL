import React from 'react'
import { motion } from "framer-motion";



type Props = {}

export default function ImageGalleryEnglish({}: Props) {
  return (
<div className='relative pt-0 mt-0'>
        
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
className="imageGrid w-full relative -top-[120px]   ">
          <div className="...">
            <img src="landscape1.jpg" />
          </div>
          <div className="...">
            <img src="landscape2.jpg" />
          </div>
          <div className="...">
            <img src="landscape3.jpg" />
          </div>

          
        </motion.div >
    
       
    </div>
   
  )
}