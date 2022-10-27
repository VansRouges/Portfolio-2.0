import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";


type Props = {
    
}

export default function About({ }: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen relative flex flex-col text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        <motion.img
            initial={{
                x:-200,
                opacity:0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ opacity: 1, x:0 }}
            viewport={{ once:true }}
            src='https://cdn.sanity.io/images/wpot5oxi/production/1ba14cde26af0662769ddd8002cde0541fd8d451-720x960.jpg'
            className='flex relative top-11 flex-shrink-0 w-40 h-40 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] xs:top-14 my-14'
        />
        <div className='space-y-5 px-0 md:px-10'>
            <h4 className='text-3xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "} background</h4>
            <p className='text-base'>
                I'm Vance. 
                Started my tech journey two years ago since then I've picked up various languages, contributed to open source, 
                worked with other developers and designers, built a score of projects both real world(businesses) and personal so I have the experience to deliver within set time.
                My preferred  weapons of choice are <span className='text-[#ffad01] animate-pulse ease-in-out duration-200'>Javascript, React, Nextjs, TailwindCSS and NodeJS</span>  for backend. 
            </p>
        </div>
    </motion.div>
  )
}