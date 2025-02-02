import React from 'react'
import Loader from '../loader'
import { Button } from '@/components/ui/button'
import { Radio } from 'lucide-react'

type Props = {}

const ActivateAutomationButton = (props: Props) => {
  return (
    <Button className='lg:px-10 rounded-full font-medium ml-4'>
        <Loader state={false}>
        <Radio />
            <p className='lg:inline hidden'>
                Activate
            </p>
        </Loader>
    </Button>
  )
}

export default ActivateAutomationButton