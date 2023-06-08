import React from 'react'
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {}

export default function ExploreTour({}: Props) {
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
        <p>2-6 timer</p>
    </div>
      
      <div className=" mx-0 top-0 text-center overflow-hidden z-20 pt-5  ">
      <h1 className="text-3xl  text-[#ffa500] font-semibold ">Explore <span className='text-black font-bold'>Leka</span></h1>
    
      <p className="p-3 pb-0 text-sm text-left ">Vandrer inn mot jordens indre og tråkker på 500 millioner år gamle bergarter, innover på biter av det Amerikanske kontinentet. Opp til Nordtjønna hvor vi spiser et godt måltid før vi tar turen videre opp til Utsikten. Herifra ser vi ned til Nesvatnet, utover Lekafjorden med Heilhornene majestetisk bak. Vi ser skipsleia Nordover forbi Torghatten, Vega og de syv søstre. Går ned til Møsmørklubban og bortover til Moho. Rundtur som krever god balanse og sterke ankler i et magisk, unikt og lunefullt landskap. </p>
      <p className="p-1 text-sm pt-2 font-bold">Pris: <span className='text-green-500'>990,-</span> pr pers. + <span className='text-green-500'>250,-</span> hvis det ønskes tilrettelagt for mat og drikke.</p>
      <button className="ctoaButton text-black border-2 border-white">Les Mer</button>

      
    </div>
    <div className='grid grid-cols-2  border-2 border-black mt-2  '>
            <div className='...'>
            <img src="explore-background.jpg" className="   " />
            </div>
            <div className='...'>
            <img src="explore-background.jpg" className="   " />
            </div>
            <div className='...'>
            <img src="explore-background.jpg" className="  " />
            </div>
            <div className='...'>
            <img src="explore-background.jpg" className=" " />
            </div>
        </div>
   
      
    </motion.div>
    
    
</article>

        
    
  )
}


