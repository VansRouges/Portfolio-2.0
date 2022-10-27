import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';


type Props = {
    
}

export default function ExperienceCard({ }: Props) {
  return (
    <div className='w-full h-[570px] flex space-x-4 overflow-x-scroll p-10 snap-x snap-mandatory
    scrollbar scrollbar-track-[#48bf53]/20 scrollbar-thumb-[#004d25]/80'>

        <article className='flex flex-col rounded-lg items-center space-y-1 flex-shrink-0
        w-[400px] md:w-[500px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 
        opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration:1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover 
                object-center mt-12'
                src='https://cdn.sanity.io/images/wpot5oxi/production/c7e12554210ec8cbafd423f52ea20b9ed5cfbfd1-1000x1000.png'
                alt=''
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-3xl font-light text-white'>Frontend Web Developer</h4>
                <p className='font-bold text-xl mt-1 text-white'>Manuels Rides Logistics</p>
                <div className='flex space-x-2 my-2'>
                    <Image
                        className='h-10 w-10 rounded-full'
                        src='https://cdn.sanity.io/images/wpot5oxi/production/342c6aa3ce18f0d19f0e3349734566ac60fea7f9-210x240.png'
                        width='40'
                        height='40'
                        alt=''
                    />
                    <Image
                        className='h-10 w-10 rounded-full'
                        src='https://cdn.sanity.io/images/wpot5oxi/production/52a71a36c086861d1d81e1368265c6429bed873a-225x225.png'
                        width='40'
                        height='40'
                        alt=''
                    />
                    <Image
                        className='h-10 w-10 rounded-full'
                        src='https://cdn.sanity.io/images/wpot5oxi/production/05e6ac6cc4faf214edd2b5d077e1a5acfcce6195-229x221.png'
                        width='40'
                        height='40'
                        alt=''
                    />
                </div>
                <p className='uppercase py-2 text-gray-300 xs:text-xs'>
                    {/* {new Date(experience.dateStarted).toDateString()} -{" "}
                    {experience.isCurrentlyWorkingHere
                        ? "Present"
                        : new Date(experience.dateEnded).toDateString()} */}
                        Started work: March, 2022  - Ended: July, 2022
                </p>

                <ul className='list-disc space-y- ml-5 text-lg h-48 text-white'>
                    {/* <li>designed and built the user interface</li> */}
                    {/* <li>Summary Points</li> */}
                </ul>
            </div>
        </article>

        <article className='flex flex-col rounded-lg items-center space-y-1 flex-shrink-0
        w-[400px] md:w-[500px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 
        opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration:1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover 
                object-center mt-12'
                src='https://cdn.sanity.io/images/wpot5oxi/production/1b90fcc87688fdfed4eaac33631507ff09e59717-100x100.jpg'
                alt=''
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-3xl font-light text-white'>Frontend Web Developer</h4>
                <p className='font-bold text-xl mt-1 text-white'>Blocklo Technologies</p>
                <div className='flex space-x-2 my-2'>
                    <Image
                        className='h-10 w-10 rounded-full'
                        src='https://cdn.sanity.io/images/wpot5oxi/production/a564e80cbd4a740999df0aca27698eaf6a3f63cf-200x174.png'
                        width='40'
                        height='40'
                        alt=''
                    />
                    <Image
                        className='h-10 w-10 rounded-full'
                        src='https://cdn.sanity.io/images/wpot5oxi/production/8730d76efbd4a40490416180ab8389876feaca1c-225x225.png'
                        width='40'
                        height='40'
                        alt=''
                    />
                    <Image
                        className='h-10 w-10 rounded-full'
                        src='https://cdn.sanity.io/images/wpot5oxi/production/e7f68959cc0da64eac17e4f9b5dca9d5ba6bb2e1-200x122.png'
                        width='40'
                        height='40'
                        alt=''
                    />
                </div>
                <p className='uppercase py-2 text-gray-300 xs:text-xs'>
                    {/* {new Date(experience.dateStarted).toDateString()} -{" "}
                    {experience.isCurrentlyWorkingHere
                        ? "Present"
                        : new Date(experience.dateEnded).toDateString()} */}
                        Started work: Aug, 2022 - Ended: Sept, 2022
                </p>

                <ul className='list-disc space-y- ml-5 text-lg h-48 text-white'>
                    {/* <li>built the wallet, sign up and login interface</li> */}
                    {/* <li>Summary Points</li> */}
                </ul>
            </div>
        </article>
    </div>
  )
}