import React from 'react'
import { motion } from "framer-motion"


type Props = {
    directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {

  return (
    <div className='grid grid-cols-4 gap-2'>
        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src='https://cdn.sanity.io/images/wpot5oxi/production/a564e80cbd4a740999df0aca27698eaf6a3f63cf-200x174.png'
                className='rounded-full border border-gray-500 object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white h-20 w-20 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>95%</p>
                </div>
            </div>
        </div>

        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src='https://cdn.sanity.io/images/wpot5oxi/production/8730d76efbd4a40490416180ab8389876feaca1c-225x225.png'
                className='rounded-full border border-gray-500 object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white h-20 w-20 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>95%</p>
                </div>
            </div>
        </div>

        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src='https://cdn.sanity.io/images/wpot5oxi/production/342c6aa3ce18f0d19f0e3349734566ac60fea7f9-210x240.png'
                className='rounded-full border border-gray-500 object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white h-20 w-20 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>95%</p>
                </div>
            </div>
        </div>

        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src='https://cdn.sanity.io/images/wpot5oxi/production/52a71a36c086861d1d81e1368265c6429bed873a-225x225.png'
                className='rounded-full border border-gray-500 object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white h-20 w-20 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>95%</p>
                </div>
            </div>
        </div>

        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src='https://cdn.sanity.io/images/wpot5oxi/production/3bf623048dc27d71547da92e44fc589cd7acfc65-192x192.jpg'
                className='rounded-full border border-gray-500 object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white h-20 w-20 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>95%</p>
                </div>
            </div>
        </div>

        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src='https://cdn.sanity.io/images/wpot5oxi/production/74e220d6b60942738d53012d8be9c5cddbd6887a-119x119.jpg'
                className='rounded-full border border-gray-500 object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white h-20 w-20 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>95%</p>
                </div>
            </div>
        </div>

        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src='https://cdn.sanity.io/images/wpot5oxi/production/608b8775828b2c83c1a7173a087796cf40a2cd13-178x100.png'
                className='rounded-full border border-gray-500 object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white h-20 w-20 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>95%</p>
                </div>
            </div>
        </div>

        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src='https://cdn.sanity.io/images/wpot5oxi/production/0b472995e0f86a68a5e46061b996daf68588d401-199x119.png'
                className='rounded-full border border-gray-500 object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white h-20 w-20 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>95%</p>
                </div>
            </div>
        </div>

        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src='https://cdn.sanity.io/images/wpot5oxi/production/e7f68959cc0da64eac17e4f9b5dca9d5ba6bb2e1-200x122.png'
                className='rounded-full border border-gray-500 object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white h-20 w-20 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>95%</p>
                </div>
            </div>
        </div>

        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src='https://cdn.sanity.io/images/wpot5oxi/production/05e6ac6cc4faf214edd2b5d077e1a5acfcce6195-229x221.png'
                className='rounded-full border border-gray-500 object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white h-20 w-20 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>95%</p>
                </div>
            </div>
        </div>

        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src='https://cdn.sanity.io/images/wpot5oxi/production/c511a32f682ceb5198dd882d70014f13089c1a66-200x200.png'
                className='rounded-full border border-gray-500 object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white h-20 w-20 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>95%</p>
                </div>
            </div>
        </div>

        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src='https://cdn.sanity.io/images/wpot5oxi/production/de0ea932f7d44d8fa309f26d5470ed9ee8cc430e-121x121.jpg'
                className='rounded-full border border-gray-500 object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white h-20 w-20 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>95%</p>
                </div>
            </div>
        </div>

        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src='https://cdn.sanity.io/images/wpot5oxi/production/c2fe5842f4f42fd4f99bb5bfd850e954a1fdf9a7-225x225.png'
                className='rounded-full border border-gray-500 object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white h-20 w-20 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>95%</p>
                </div>
            </div>
        </div>

        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src='https://cdn.sanity.io/images/wpot5oxi/production/e3c5568c1f0ec18e55b16bd239ebefa7c6be3886-225x225.jpg'
                className='rounded-full border border-gray-500 object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white h-20 w-20 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>95%</p>
                </div>
            </div>
        </div>

        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src='https://cdn.sanity.io/images/wpot5oxi/production/3afad53e9984699280c769969b3b5136b5bd16d6-240x210.png'
                className='rounded-full border border-gray-500 object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white h-20 w-20 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>95%</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Skill;