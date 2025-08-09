import { AboutSection } from '@/components/about-section'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import React from 'react'

function page() {
  return (
    <div className='dark:bg-black'>
        <Navbar />
        <div className='min-h-screen pt-16'>
        <AboutSection />
        </div>
        <Footer />
    </div>
  )
}

export default page