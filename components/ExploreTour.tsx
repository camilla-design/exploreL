import React from 'react'
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {}

export default function ExploreTour({}: Props) {
  return (
   
    <div className="containerStyle p-20 border-2 border-black w-[400px] md:w-[900px] mx-auto ">


   

    
  
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
    className="absolute pt-0 w-[400px] mx-auto md:w-[900px]" >
        
    
      
      <div className="relative mx-0 top-0 text-center overflow-hidden z-20 pt-5  ">
      <h1 className="text-3xl  text-[#ffa500] font-semibold ">Explore <span className='text-black font-bold'>Leka</span></h1>
    
      <p className="p-3 pb-0 sm text-left ">Vi vandrer inn mot jordens indre og tråkker på 500 millioner år gamle bergarter, innover på biter av det Amerikanske kontinentet. Videre går vi opp til Nordtjønna hvor vi spiser et godt måltid før vi tar turen videre opp til Utsikten. Herifra ser vi ned til Nesvatnet, utover Lekafjorden med Heilhornene majestetisk bak. Vi ser skipsleia Nordover forbi Torghatten, Vega og de syv søstre. Fra utsikten går vi ned til Møsmørklubban og bortover til Moho. Dette er en rundtur som krever god balanse og sterke ankler i et magisk, unikt og lunefullt landskap. </p>
      <h2 className=" text-1xl text-white font-bold ">Turen tar 5-6 timer</h2>
      <p className="pt-1 text-1xl font-bold">Pris: 990,- pr pers. + 250,- hvis det ønskes tilrettelagt for mat og drikke.</p>
      <button className="ctoaButton text-black border-2 border-white">Les Mer</button>

      
    </div>
    <div className='grid grid-cols-2  border-2 border-black '>
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
    
    
</div>

        
    
  )
}


/*

<h2 className='pt-20 text-3xl font-bold text-center z-20'>Turerene <span className='font-thin'>vi tilbyr!</span></h2>
        <p className='p-0 text-center z-20'>Vi skreddesyr også turer tilpasset deg, ta kontakt for andre turer.</p>
      <article className='flex flex-col  items-center '>
      <div className='md:px-5 z-20 absolute px-8'>
             <h4 className='pt-3 pb-3 font-bold text-3xl text-[#ffa500]'>Explore <span className='text-black'>Leka </span> </h4>
             <p className='font-thin pb-2'>Vi vandrer inn mot jordens indre og tråkker på 500 millioner år gamle bergarter, innover på biter av det Amerikanske kontinentet. </p>
             <p>Turen tar 5-6 timer</p>
             <p className='text-[#00a86b] pt-3 pb-5'>Pris: 990,- pr pers. + 250,- hvis det ønskes tilrettelagt for mat og drikke.</p>
             <Link href="#" className='readMoreButton' >
                <button>Les mer</button>
             </Link>
         </div>
     
        
        <motion.img
        initial={{
          y: -100,
          opacity: 0,
      }}
      transition={{
          duration: 1.2,
      }}
      whileInView={{
          opacity: 1,
          y: 0,
      }}
      viewport={{
          once: true,
      }}
         className='absolute inset-0 object-cover object-center mx-auto z-0 bottom-0'
         src="explore_img.jpg"/>



         
    </article>

*/