import React from 'react'
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {}

export default function EarlyTour({}: Props) {
  return (
    <article className=" h-[700px] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] snap-center  ">


   

    
  
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
    className="  border-2 border-black rounded-lg " >
        
    <div className='relative bg-[#ffa500] w-[100px] p-2 rounded-md'>
        <p>Etter behov og ønsker</p>
    </div>
      
      <div className=" mx-0 top-0 text-center overflow-hidden z-20 pt-5  ">
      <h1 className="text-3xl  text-[#ffa500] font-semibold ">Early <span className='text-black font-bold'>Bird</span></h1>
    
      <p className="p-3 pb-0 text-sm text-left ">Early-tur med sykkel ut til Skeisnesset for å spise frokost, fotografering etc. Vandretur ut til nordenden av Leka, blant kystlynghei, gravhauger, fugler og villsau for å se på morgensolen stå opp. Frokost og morgensol i fredfulle omgivelser, for oss som ønsker en ekstra vakker start på dagen.  </p>
      <p className='text-sm text-left p-3'>Turen er godt egnet til morgenyoga, meditasjon eller foto- og diktinspirasjon.</p>
      <p className="p-1 text-sm pt-2 font-bold">Pris: <span className='text-green-500'>490,-</span> pr pers. + <span className='text-green-500'>250,-</span> hvis det ønskes tilrettelagt for mat og drikke.</p>
      <button className="ctoaButton text-black border-2 border-white">Les Mer</button>

      
    </div>
    <div className='grid grid-cols-2  border-2 border-black mt-2  '>
            <div className='...'>
            <img src="early_1.jpg" className="   " />
            </div>
            <div className='...'>
            <img src="early_2.jpg" className="   " />
            </div>
            <div className='...'>
            <img src="early_3.jpg" className="  " />
            </div>
            <div className='...'>
            <img src="early_4.jpg" className=" " />
            </div>
        </div>
   
      
    </motion.div>
    
    
</article>
  )
}