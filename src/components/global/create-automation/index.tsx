'use client'

import { Button } from '@/components/ui/button'
import React, { useMemo } from 'react'
import Loader from '../loader'
import { Activity } from 'lucide-react'
import { useCreateAutomation } from '@/hooks/use-automation'
import { v4 } from 'uuid'

type Props = {}

const CreateAutomation = (props: Props) => {
  const mutationId = useMemo(() => v4(), [])

  console.log(mutationId)
  const {isPending, mutate} = useCreateAutomation(mutationId)
// console.log(mutationId)
  return (
    <Button className="lg:px-5 py-6 hover:opacity-80  rounded-full  font-semibold "
    onClick={() => mutate({ name: 'abhiii',
     id: mutationId,
      createdAt: new Date(),
      keywords: [],
      })}>
        <Loader state={isPending}>
        <Activity  />
        <p className='lg:inline hidden'>Create an automation</p>
        </Loader>
    </Button>
  )
}

export default CreateAutomation