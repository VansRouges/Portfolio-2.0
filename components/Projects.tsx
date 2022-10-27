import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';

type Props = {
    
}

export default function Projects({ }: Props) {
    
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
        max-w-full justify-evenly mx-auto items-center z-0'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full h-[620px] flex overflow-x-scroll overflow-y-hidden snap-x
        snap-madatory z-20 scrollbar  scrollbar-track-[#48bf53]/20 scrollbar-thumb-[#004d25]/80'>
            <div
                className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen' 
            >
                <motion.img
                    initial={{
                        y: -100,
                        opacity: 0
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    src='https://cdn.sanity.io/images/wpot5oxi/production/39f746ddd8a735d7e22bea1a025c112276ca1aa9-1414x973.png'
                    alt=''
                    className='h-36 sm:w-64 sm:h-60'
                />

                <div className='space-y-1 px-0 md:px-10 max-w-6xl'>
                    <h4 className='md:text-3xl lg:text-4xl font-semibold text-center'>
                        <span className='underline decoration-[#f7ab0a]/50'>
                            Case Study 1 of 3</span><br />
                            Zoidac Web3 Platform
                    </h4>

                    <div className='flex items-center space-x-2 justify-center'>
                        <Image
                            className=''
                            width='32'
                            height='32'
                            src='https://cdn.sanity.io/images/wpot5oxi/production/a564e80cbd4a740999df0aca27698eaf6a3f63cf-200x174.png'
                            alt=''
                        />
                        <Image
                            className=''
                            width='32'
                            height='32'
                            src='https://cdn.sanity.io/images/wpot5oxi/production/8730d76efbd4a40490416180ab8389876feaca1c-225x225.png'
                            alt=''
                        />
                        {/* <Image
                            className=''
                            width='32'
                            height='32'
                            src='https://cdn.sanity.io/images/wpot5oxi/production/a564e80cbd4a740999df0aca27698eaf6a3f63cf-200x174.png'
                            alt=''
                        /> */}
                    </div>

                    <p className='text-sm text-center md:text-left'>
                    Zoidac is a decentralized Market making use of Web3 technologies aimed at enabling Artists and Creatives market their work and get paid in cryptocurrency. This platform currently accepts Sol and interacts with all wallets built on the Solana Blockchain. 
                    This repository will only contain the Frontend Build.
                    </p>

                </div>
            </div>  

            <div
                className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen' 
            >
                <motion.img
                    initial={{
                        y: -100,
                        opacity: 0
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    src='https://cdn.sanity.io/images/wpot5oxi/production/ef7affbbdf30923b8c612aa7e6b2b3938b0123dd-1915x821.png'
                    alt=''
                    className='h-36 sm:w-64 sm:h-60'
                />

                <div className='space-y-1 px-0 md:px-10 max-w-6xl'>
                    <h4 className='md:text-3xl lg:text-4xl font-semibold text-center flex flex-col'>
                        <span className='underline decoration-[#f7ab0a]/50'>
                            Case Study 2 of 3</span>
                            Solana Pay
                    </h4>

                    <div className='flex items-center space-x-2 justify-center'>
                        <Image
                            className=''
                            width='32'
                            height='32'
                            src='https://cdn.sanity.io/images/wpot5oxi/production/a564e80cbd4a740999df0aca27698eaf6a3f63cf-200x174.png'
                            alt=''
                        />
                        <Image
                            className=''
                            width='32'
                            height='32'
                            src='https://cdn.sanity.io/images/wpot5oxi/production/52a71a36c086861d1d81e1368265c6429bed873a-225x225.png'
                            alt=''
                        />
                        {/* <Image
                            className=''
                            width='32'
                            height='32'
                            src='https://cdn.sanity.io/images/wpot5oxi/production/a564e80cbd4a740999df0aca27698eaf6a3f63cf-200x174.png'
                            alt=''
                        /> */}
                    </div>

                    <p className='text-sm text-center'>
                        Solana Pay is an Online platform that sells Anime gifs and allows users to make purchase in cryptocurrencies such as $SOL and USDC in realtime.
                    </p>

                </div>
            </div>

            <div
                className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen' 
            >
                <motion.img
                    initial={{
                        y: -100,
                        opacity: 0
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    src='https://cdn.sanity.io/images/wpot5oxi/production/5a4df6bdf38bcac8986af8b90a1156bb4bf42f63-1890x870.png'
                    alt=''
                    className='h-36 sm:w-64 sm:h-60'
                />

                <div className='space-y-1 px-0 md:px-10 max-w-6xl'>
                    <h4 className='md:text-3xl lg:text-4xl font-semibold text-center'>
                        <span className='underline decoration-[#f7ab0a]/50'>
                            Case Study 3 of 3</span><br />
                            Sound Code
                    </h4>

                    <div className='flex items-center space-x-2 justify-center'>
                        <Image
                            className=''
                            width='32'
                            height='32'
                            src='https://cdn.sanity.io/images/wpot5oxi/production/342c6aa3ce18f0d19f0e3349734566ac60fea7f9-210x240.png'
                            alt=''
                        />
                        <Image
                            className=''
                            width='32'
                            height='32'
                            src='https://cdn.sanity.io/images/wpot5oxi/production/52a71a36c086861d1d81e1368265c6429bed873a-225x225.png'
                            alt=''
                        />
                        <Image
                            className=''
                            width='32'
                            height='32'
                            src='https://cdn.sanity.io/images/wpot5oxi/production/05e6ac6cc4faf214edd2b5d077e1a5acfcce6195-229x221.png'
                            alt=''
                        />
                    </div>

                    <p className='text-sm text-center md:text-left'>
                        Sound Code is a Christ Embassy Ministry application that will aid the identification of any digital audio/sound released in and by the ministry. 
                        This technology uses audio fingerprinting to enable users easily index/search audio/video materials with short recordings. 
                        This solution is solely targeted for Our Ministry and Ministry Content.
                    </p>

                </div>
            </div>  
        </div>

        <div className='w-full absolute top-[30%] bg-[#004d25]/10 left-0 h-[340px]
        -skew-y-12' />
    </motion.div>
  )
}