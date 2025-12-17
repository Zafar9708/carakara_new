'use client'

import ImageCards from '@/components/ImageCards'
import EnhancedHeader from '../components/EnhancedHeader'
import Footer from '../components/Footer'
import ContactUs from '@/components/ContactUs'
import ProductQuickView from '@/components/ProductQuickView'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <EnhancedHeader />
      <ImageCards />
      {/* <ContactUs /> */}
      <Footer />
    </div>
  )
}