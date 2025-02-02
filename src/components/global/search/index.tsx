import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

type Props = {}

const Search = (props: Props) => {
  return (
    <div className='flex overflow-hidden gap-x-1 md:gap-x-2 border-2 rounded-full px-6 py-1 items-center flex-1 text-sm'>
        <SearchIcon size={16}/> 
        <Input placeholder='Search by name, email or status' className='border-none outline-none flex-1 focus:ring-0 ring-0 text-sm'/>


    </div>
  )
}

export default Search