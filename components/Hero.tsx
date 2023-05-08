import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div>
      <div className="flex flex-col relative  h-screen text-center md:text-left md:flex-row max-w-7xl px-18 justify-evenly mx-auto items-center">
        <motion.div
          initial={{
            y: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 2,
          }}
          className="px-0 md:px-10 z-20 md:w-full absolute top-20"
        >
          <h1 className="text-5xl uppercase font-bold tracking-[2px] text-[#ffa500] w-[300px] md:w-full ">
            Explore<br></br>{" "}
            <span className="font-bold text-3xl text-black">Leka med oss</span>{" "}
          </h1>
          <p className="text-s pt-3 w-[300px] md:w-[400px]">
            Bli med oss og utforsk denne vakkre øya med erfarene guider. Vi
            tilbyr privat guidet tur tilpasset deg!
          </p>
          <button className="pt-2 pb-2 pl-4 pr-4 rounded-full mt-5 bg-[#ffa500]">
            Kontakt oss
          </button>
        </motion.div>

        <div className="flex-shrink-0">
          <img
            src="hero_ipad_v2.jpg"
            className="h-screen md:hidden relative inset-0 object-cover object-center mx-auto z-0"
          />
          <img
            src="hero_full_v2.jpg"
            className="h-screen hidden md:block absolute inset-0 object-cover object-center mx-auto z-0"
          />
        </div>
      </div>
    </div>
  );
}

/*



       
       
      
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
       className='top-8  absolute z-20 mb:mb-0 flex-shrink-0 md:text-left'>
        <h1 className='text-5xl uppercase font-bold tracking-[2px] text-[#ffa500] w-[300px] md:w-full '>Explore <span className='font-bold text-3xl text-black'>Leka med oss</span> </h1>
        <p className='text-s pt-3 w-[300px] md:w-[400px]'>Bli med oss og utforsk denne vakkre øya med erfarene guider. Vi tilbyr privat guidet tur tilpasset deg!</p>
        <button className='pt-2 pb-2 pl-4 pr-4 rounded-full mt-5 bg-[#ffa500]'>Kontakt oss</button>

        

       </motion.div>

       <div className='flex-shrink-0'>
    <img src="background_img_ipad.jpg" className='h-screen md:hidden absolute inset-0 object-cover object-center mx-auto z-0'/>
    <img src="background_full.jpg" className='h-screen hidden md:block absolute inset-0 object-cover object-center mx-auto z-0'/>
  
    </div>
        
    
        

                



 */
