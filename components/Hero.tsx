import React from "react";
import Header from "./Header";
import Link from "next/link";
import { motion } from "framer-motion";
import ExploreTour from "./ExploreTour";

type Props = {};

export default function Hero({}: Props) {
  return (

    <div className="containerStyle w-full">


        
<div>
    <img src="background-hero.jpg " className="heroBackgroundImg  z-0  absolute  " />
    
    </div>
   

    
  
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
    className="flex absolute top-10 w-[350px] mx-auto  overflow-hidden  text-left flex-row max-w-full justify-evenly   z-10" >
        
         
          <div className=" p-5 mx-0 text-center overflow-hidden z-20  ">
          <h1 className="font-bold text-5xl text-[#ffa500] ">Explore</h1>
          <h2 className="pt-1 font-medium text-3xl text-black">Leka med oss</h2>
          <p className="pt-2 sm text-white">Bli med oss og utforsk denne vakkre øya med erfarene guider. </p>
          <p className="pt-2 text-white">Vi tilbyr privat guidet tur tilpasset deg!</p>
          <button className="ctoaButton text-black border-2 border-white">Kontakt Oss</button>
        </div>
       
          
        </motion.div>
        <div className="z-10 absolute text-center font-bold">
    <Link href="#" >
                        <button className="heroButton">Turer</button>
                    </Link>
                    <Link href="#">
                        <button className="heroButton">Om oss</button>
                    </Link>
                    <Link href="#">
                        <button className="heroButton">Kontakt</button>
                    </Link>
    </div>

   
        <div className="imageGrid w-full place-content-center">
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
