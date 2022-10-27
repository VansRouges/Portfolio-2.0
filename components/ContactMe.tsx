import React from 'react'
import { motion } from "framer-motion"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};


type Props = {}

export default function ContactMe({}: Props) {
const { 
    register, 
    handleSubmit, 
} = useForm<Inputs>();

const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:evansagina@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message}
    (${formData.email})`;
}

  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-center mx-auto items-center'>
       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
           Contact 
        </h3>

        <div className='flex flex-col space-y-3  relative top-[7%]'>
            <h4 className='sm:text-2xl lg:text-4xl font-semibold text-center'>
                I have got just what you need.{" "}
                <span className='decoration-[#48bf53]/50 underline'>Lets Talk</span>
            </h4>

            <div className='space-y-6'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#11823b] h-6 w-6 animate-pulse' />
                    <p className='sm:text-2xl lg:text-3xl'>+2348131808830</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#11823b] h-6 w-6 animate-pulse' />
                    <p className='sm:text-2xl lg:text-3xl'>evansagina57@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#11823b] h-6 w-6 animate-pulse' />
                    <p className='sm:text-2xl lg:text-3xl'>Lagos, Nigeria</p>
                </div>
            </div>

            <form 
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col space-y-2 w-fit mx-auto'
            >
                <div className='flex xs:-space-x-4 md:space-x-1'>
                    <input 
                        {...register('name')} 
                        placeholder='Name' 
                        className='contactInput' 
                        type='text' 
                    />
                    <input 
                        {...register('email')} 
                        placeholder='Email' 
                        className='contactInput' 
                        type='email' 
                    />
                </div>

                <input 
                    {...register('subject')} 
                    placeholder='Subject' 
                    className='contactInput' 
                    type='text' 
                />

                <textarea 
                    {...register('message')} 
                    placeholder='Message' 
                    className='contactInput' 
                />
                <button 
                    type='submit' 
                    className='bg-[#48bf53] py-5 px-10 rounded-md text-slate-50 font-bold text-lg'
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}