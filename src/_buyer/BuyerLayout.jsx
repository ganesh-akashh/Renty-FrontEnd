
import React from 'react'
import { Outlet } from 'react-router-dom'
import BuyerNavbar from '@/components/shared/BuyerNavbar'

const BuyerLayout = () => {
  return (
     <div className='flex h-screen flex-col'>
            <BuyerNavbar />
            <main className='flex-1'>
                <Outlet />
            </main>
       </div>
  )
}

export default BuyerLayout