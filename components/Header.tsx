import React from 'react'
import Link from "next/link"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"


type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto
    z-20 xl:items-center'>
        <motion.div
             initial={{
                x: -500,
                opacity: 0,
                scale:0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{ duration:1.5 }}
            className='flex flex-row items-center'
        >
            <SocialIcon 
                url='https://twitter.com/vancebillions' 
                fgColor='#11823b' 
                bgColor='transparent' 
            />
            <SocialIcon 
                url='https://github.com/VansRouges/'
                fgColor='#11823b' 
                bgColor='transparent' 
            />
            <SocialIcon 
                url='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFIwFAckM7ACAAAAYQWFiGgcUVk0-wCKhjoGeKt7V3Hf0p7wR13cT-RqAsEvNJNBngbNbeTHAuAycfgJjsf5CaikALrqQVrnRODlfm9VB_1tfSuv7ij1qLX54xVedzCc4gaJUA=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fevans-agina-a3b69b219%2F'
                fgColor='#11823b' 
                bgColor='transparent' 
            />
        </motion.div>

        <Link href='#contact'>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale:0.5,
                }}
                animate={{
                    x:0,
                    opacity:1,
                    scale:1,
                }}
                transition={{ duration:1.5 }}
                className='flex flex-row items-center cursor-pointer'
            >
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='#11823b'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-[#11823b]'>Get In Touch</p>
            </motion.div>
        </Link>
    </header>
  )
}