/* eslint-disable @next/next/no-img-element */
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 mb-[100px] md:mb-5' id="contact">
        
        <div className='flex flex-col items-center'>
        <h1 className="mb-4 text-3xl justify-center text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl lg:max-w-[45vw]">
            Ready to take <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> your digital presence
            </span> to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
            Reach out to me today and let&apos;s discuss how I can help you achiwvw your goals.
        </p>
        <a href="mailto:adityasantratest1@gmail.com">
            <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow/>}
                position='right'
            />
        </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>
                Copyright © 2024 Aditya
            </p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile)=>(
                    <div key={profile.id} className='w-10 h-10 sm:mt-5 md:mt-5 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <img src={profile.img} 
                        alt={profile.img}
                        width={20}
                        height={20}
                        />
                    </div>    
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer