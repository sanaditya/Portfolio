/* eslint-disable @next/next/no-img-element */
import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'

const Experience = () => {
  return (
    <div className='py-20'>
        <h1 className="mb-4 text-3xl justify-center text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">My 
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Work Experiences</span>
        </h1>

        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
            {workExperience.map((card)=>(
                <Button 
                key={card.id}
                duration={Math.floor(Math.random()*10000)+1000}
                borderRadius='1.75rem'
                className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                >
                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-10 gap-2'>
                        <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16'/>
                        <div className='lg:ms-5'>
                            <h1 className='text-start text-xl md:text-2xl font-bold'>
                                {card.title}
                            </h1>
                            <p className='text-start text-white-100 mt-3 font-semibold'>
                                {card.desc}
                            </p>
                        </div>
                    </div>
                </Button>
            ))}
        </div>

    </div>
  )
}

export default Experience