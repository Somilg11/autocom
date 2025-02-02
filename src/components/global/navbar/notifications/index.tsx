import { Button } from '@/components/ui/button'
import { Bell } from 'lucide-react'
import React from 'react'

type Props = {}

const Notifications = (props: Props) => {
  return (
    <Button className=" py-6 bg-white rounded-full  font-semibold ">
        <Bell size={44} />
    </Button>
  )
}

export default Notifications