import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {}

function Header({}: Props) {
  return (
    <header>
        <div className=' sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
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
                        fgColor='white'
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