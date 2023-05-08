import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {}

export default function Hero({}: Props) {
  return (
    <div>
    <div className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
    <img src="background_img_ipad.jpg" className='h-screen absolute inset-0 object-cover object-center mx-auto z-0'/>
  
        
        <motion.div
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 3,
        }}
         className="mt-5 absolute top-0">
                    <Link href="#" >
                        <button className="heroButton">Turer</button>
                    </Link>
                    <Link href="#">
                        <button className="heroButton">Om oss</button>
                    </Link>
                    <Link href="#">
                        <button className="heroButton">Kontakt</button>
                    </Link>

                </motion.div>
        
       <motion.div 
       initial={{
        y: -500,
        opacity: 0,
        scale: 0.5
    }}

    animate={{
        y: 0,
        opacity: 1,
        scale: 1
    }}

    transition={{
        duration: 2,
    }}
       className='top-20 pt-20 mt-10 absolute z-20'>

       
       <h1 className='text-5xl uppercase font-bold tracking-[2px] text-[#ffa500] w-[300px] md:w-full '>Explore <span className='font-bold text-3xl text-black'>Leka med oss</span> </h1>
        <p className='text-s pt-3 w-[300px] md:w-[400px]'>Bli med oss og utforsk denne vakkre øya med erfarene guider. Vi tilbyr privat guidet tur tilpasset deg!</p>
        <button className='pt-2 pb-2 pl-4 pr-4 rounded-full mt-5 bg-[#ffa500]'>Kontakt oss</button>
      

        

                

                </motion.div>
               
        

    </div>
    </div>
  )
}