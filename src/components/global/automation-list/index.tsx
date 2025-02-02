'use client'
import { usePaths } from '@/hooks/user-nav'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import GradientButton from '../gradient-button'

type Props = {}

const AutomationList = (props: Props) => {
    const {pathname} = usePaths();
  return (
    <div className='flex flex-col gap-y-3 '>
        <Link href={`${pathname}/1234434355`} className=' transition duration-100 rounded-xl p-5 border-[1px]  flex' >
        <div className='flex flex-col flex-1 items-start'>
            <h2 className='text-xl font-semibold'>
                Automation name 
            </h2>
            <p className='text-sm font-light mb-2'>
                This is something
            </p>
            <div className='flex gap-x-2 flex-wrap mt-3'>
                <div className={cn('rounded-full px-4 py-1 capitalize',
                    (0+1) % 1 == 0 && 'bg-keyword-green/15 border-2 border-keyword-green',
                    (1+1) % 2 == 0 && 'bg-keyword-blue/15 border-2 border-keyword-blue',
                    (2+1) % 3 == 0 && 'bg-keyword-yellow/15 border-2 border-keyword-yellow',
                    (3+1) % 4 == 0 && 'bg-keyword-red/15 border-2 border-keyword-red',
                )}>
                    getstarted
                </div>
            </div>
            <div className='rounded-full border-2 mt-3 border-dashed px-3 py-1'>
                <p className='text-sm'>
                    No keywords
                </p>
            </div>
        </div>
        <div className='flex flex-col justify-between'>
            <p className='capitalize text-sm font-light'>
                October 5th 2024
            </p>
            <GradientButton type='BUTTON' className='w-full'>
                SMART AI
            </GradientButton>
        </div>
        </Link>
    </div>
  )
}

export default AutomationList