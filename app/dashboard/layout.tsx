import Banner from '@/components/banner'
import Header from '@/components/header'
import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
   <div className='bg-gray-100 min-h-screen'>
        <Header />
        <Banner />
        {children}
    </div>
  )
}
