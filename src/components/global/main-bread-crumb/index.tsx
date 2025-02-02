import { PAGES_ICON } from '@/constants/pages'
import { Divide } from 'lucide-react'
import React from 'react'

type Props = {
    page: string
    slug?: string
}

const MainBreadcrumb = ({page, slug}: Props) => {
  return (
    <div className='flex flex-col items-start'> 
    {page === 'Home' && <div className='flex justify-center w-full'></div>}
    <div className='radial--gradient w-full py-5 lg:py-10 flex flex-col items-center'>
        <p className='text-text-secondary text-lg'>Welcome back</p>
        <h2 className='capitalize text-4xl font-medium'>{slug}!</h2>
    </div>
    <span className='radial-gradient inline-flex py-5 lg:py-10 pr-16 gap-x-2 items-center'>
        {PAGES_ICON[page.toUpperCase()]}    
        <h2 className='font-semibold text-3xl capitalize'>{page}</h2>
    </span>
    </div>
  )
}

export default MainBreadcrumb