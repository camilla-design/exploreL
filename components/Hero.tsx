import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className='flex flex-col relative  h-screen text-center md:text-left md:flex-row max-w-7xl px-18 justify-evenly mx-auto items-center text-black'>
       <div>
       <h1 className='text-3xl uppercase font-bold tracking-[2px] text-black '>Explore <span className='font-thin'>Leka med oss</span> </h1>
        <p className='text-s p-3'>Bli med oss og utforsk denne vakkre øya med erfarene guider. Vi tilbyr privat guidet tur tilpasset deg!</p>

        <div className="pt-5">
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

                

                </div>
                <div className='px-0 md:px-10'>
        <img
         
         src="/hero-img-1.jpg" className=' mb:mb-0 flex-shrink-0' />
        
        </div>

    </div>
  )
}