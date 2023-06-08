import React from 'react'
import { motion } from "framer-motion";



type Props = {}

export default function ImageGridGallery({}: Props) {
  return (
<div className='relative pt-0 mt-0'>
        
<div className="imageGrid w-full relative -top-[120px]   ">
          <div className="...">
            <img src="landscape1.jpg" />
          </div>
          <div className="...">
            <img src="landscape2.jpg" />
          </div>
          <div className="...">
            <img src="landscape3.jpg" />
          </div>

          
        </div>
    
       
    </div>
   
  )
}