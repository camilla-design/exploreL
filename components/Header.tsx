import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {}

function Header({}: Props) {
  return (
    <header>
        <div className='sticky  p-5 pb-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        
            <motion.div initial={{
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
                    duration: 1.7,
                }} className=''>
        <img src="/exploreleka-logo-color.png" width={80} height={80} />
        </motion.div>
        <div className='flex flex-row'>
        <Link href="#" className='mt-1 opacity-100 hover:opacity-70 cursor-pointer transition-opacity'>
            <img src="norwegian-flag.png" width={50} />
          </Link>
        <Link href="#" className=' hover:opacity-100 opacity-70 cursor-pointer transition-opacity '>
        <img src="english-flag.png" width={50} />
        </Link>
        
          
        </div>
        <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}

        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}

        transition={{
            duration: 1.5,
        }}>
        <SocialIcon
                        className='crusior-pointer'
                        network='email'
                        fgColor='black'
                        bgColor='transparent'
                        url='http://localhost:3000/#contact' />
                        
                        <Link href="#contact">
                        <p className='uppercase hidden md:inline-flex text-sm text-white'>Ta Kontakt</p>
                       
                        </Link>
        </motion.div>
        </div>
    </header>
  )
}

export default Header