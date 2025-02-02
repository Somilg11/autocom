import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = {
    children: React.ReactNode
    type: 'BUTTON' | 'LINK'
    href?: string
    className?: string
}

const GradientButton = ({children, type, className, href}: Props) => {
    const gradients = 'bg-gradient-to-r from-[#ff8a00] to-[#da1b60] rounded-xl p-[2px]';
    
    switch (type) {
        case 'BUTTON':
            return <div className={gradients}>
                <Button className={cn(className, 'rounded-xl')}>
                    {children}
                </Button>
            </div>
            break;
        case 'LINK':
            return <div className={gradients}>
                <Link href={href!} className={cn(className, 'rounded-xl')}>{children}</Link>
            </div>
            break;
        default:
            return null
            break;
    }
  return (
    <div>GradientButton</div>
  )
}

export default GradientButton