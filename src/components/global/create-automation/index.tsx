import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
import { Activity } from 'lucide-react'

type Props = {}

const CreateAutomation = (props: Props) => {
  return (
    <Button className="lg:px-5 py-6 hover:opacity-80  rounded-full  font-semibold ">
        <Loader state={false}>
        <Activity  />
        <p className='lg:inline hidden'>Create an automation</p>
        </Loader>
    </Button>
  )
}

export default CreateAutomation