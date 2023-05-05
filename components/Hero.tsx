import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className='flex  flex-col relative  h-screen text-center md:text-left md:flex-row max-w-7xl px-18 justify-evenly mx-auto items-center text-white'>
        <div className="pt-5 absolute top-0">
                    <Link href="#" >
                        <button className="heroButton">Turer</button>
                    </Link>
                    <Link href="#">
                        <button className="heroButton">Om oss</button>
                    </Link>
                    <Link href="#" >
                        <button className="heroButton">utleie</button>
                    </Link>
                    <Link href="#">
                        <button className="heroButton">Kontakt</button>
                    </Link>

                </div>
        
       <div className='top-20 absolute pt-9'>

       
       <h1 className='text-3xl uppercase font-bold tracking-[2px] text-white '>Explore <span className='font-thin text-black'>Leka med oss</span> </h1>
        <p className='text-s pt-3 w-[300px] md:w-[400px]'>Bli med oss og utforsk denne vakkre øya med erfarene guider. Vi tilbyr privat guidet tur tilpasset deg!</p>

        

                

                </div>
               
        

    </div>
  )
}