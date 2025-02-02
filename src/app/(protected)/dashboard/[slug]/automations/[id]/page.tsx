import Trigger from '@/components/global/automations/trigger'
import AutomationBreadcrumb from '@/components/global/bread-crumbs/automations'
import { TriangleAlert } from 'lucide-react'
import React from 'react'

type Props = {
    params: {id: string}
}

const Page = ({params}: Props) => {
  return (
    <div className='flex flex-col  items-center gap-y-20'>
        <AutomationBreadcrumb id={params.id} />
        <div className='w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col gap-y-3'>
        <div className='flex gap-x-2'>
        <TriangleAlert />
        When...
        </div>
        <Trigger id={params.id} />
        </div>
    </div>
  )
}

export default Page