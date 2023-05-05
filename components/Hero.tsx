import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className='text-black h-screen items-center justify-center text-center overflow-hidden'>
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}

        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}

        transition={{
            duration: 3,
        }}
         className='p-3 relative mx-auto mt-11 top-24 '>
        <h1 className='text-2xl uppercase font-bold tracking-[3px] '><span className='text-orange-500'>Explore</span> Leka med oss! </h1>
        <p className='text-s p-3'>Bli med oss og utforsk denne vakkre øya med erfarene guider. Vi tilbyr turer privat guidet turer tilpasset deg!</p>
        </motion.div>
    </div>
  )
}