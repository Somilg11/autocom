import React from 'react'
import PaymentButton from '../payment-button'

type Props = {

}

const UpgradeCard = (props : Props) => {
  return (
    <div className='bg-[#252525] p-3 rounded-2xl flex flex-col gap-y-3'>
        <span className='test-sm'>Upgrade to {''}
            <span className='text-pink-500'>Smart AI</span>
        </span>
        <p className='text-zinc-500 text-sm'>Unlock all features <br /> including AI and more</p>
        <PaymentButton></PaymentButton>
    </div>
  )
}

export default UpgradeCard