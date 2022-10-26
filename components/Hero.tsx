import React from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import Link from "next/link"
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, The Name's Evans Agina`,
            "But you can call me Vance",
            "Guy-who-loves-Movies.tsx",
            "<ButLovesToCodeMore />",
            "Looking forward to working with you",
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
        <BackgroundCircles />
        <Image 
            className="relative rounded-full h-32 w-32 mx-auto object-cover"
            src='https://cdn.sanity.io/images/wpot5oxi/production/967cb77763ed5e03db758f6e60cadc71a74a1630-612x612.png'
            alt=''
            width='128'
            height='128'
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-[#48bf53] pb-2 tracking-[15px]'>
                frontend web developer
            </h2>
             <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span>{text}</span>
                <Cursor cursorColor='#48bf53' />
            </h1>

            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>

    </div>
  )
}