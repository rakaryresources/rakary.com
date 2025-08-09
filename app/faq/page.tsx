import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import React from 'react'

function page() {
  return (
    <div className='dark:bg-black'>
      <Navbar />
      <div className='pt-10 min-h-screen'>
      <FAQ/>
      </div>
      <Footer />
    </div>
  )
}

export default page