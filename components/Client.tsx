/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Client = () => {
  return (
    <div className="py-20" id="testimonials">
        <h1 className="mb-4 text-3xl justify-center text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Kind Words from <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Satisfied Clients</span> </h1>
        <div className="flex flex-col items-center justify-center max-lg:mt-10">
            <InfiniteMovingCards
                items={testimonials}
                direction='right'
                speed='slow'
            />
            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
                {companies.map(({id,img,name,nameImg})=>(
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                        <img src={img} alt={name} className='md:w-10 w-5'/>
                        <img src={nameImg} alt={name} className='md:w-24 w-20'/>
                    </div>    
                ))}
            </div>
        </div>
    </div>
  )
}

export default Client