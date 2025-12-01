'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function SimpleBigCards() {
  const [imageErrors, setImageErrors] = useState({})

  const handleImageError = (productId) => {
    setImageErrors(prev => ({ ...prev, [productId]: true }))
  }

  const products = [
    {
      id: 1,
      name: "Carakara Calm",
      subtitle: "Adaptogenic Relaxation Formula",
      image: "/images/b1.jpg",
      description: "Carakara Calm is a functional adaptogen drink crafted to help you unwind, recover, and reset. Formulated with botanicals and amino acids, it gently lowers stress, supports emotional balance, and prepares your mind for deep rest and recovery. Designed for modern lives filled with deadlines, decisions, and digital noise, Carakara Calm helps you slow down with intention so you can show up restored, grounded, and ready to become your best self.",
      features: ["Stress Reduction", "Emotional Balance", "Deep Rest", "Natural Recovery"]
    },
    {
      id: 2,
      name: "Carakara Focus",
      subtitle: "Nootropic Cognitive Enhancer",
      image: "/images/b2.jpg", 
      description: "Carakara Focus is a nootropic-forward drink crafted to sharpen your mind without overstimulating your body. Powered by natural caffeine, amino acids, and botanicals, it delivers calm, sustained clarity that helps you think deeper, move faster, and stay present through the demands of your day. No jitters, no crashes — just focused energy that feels clean, steady, and intentional.",
      features: ["Mental Clarity", "Sustained Focus", "Clean Energy", "No Jitters"]
    }
  ]

  return (
    <section id="image-cards" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Professional typography */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium tracking-widest uppercase text-gray-500 border-b border-gray-200 pb-2">
              Coming Soon
            </span>
          </div>
          {/* <h1 className="text-5xl md:text-6xl font-light text-black tracking-tight mb-6">
            Mindful Performance
          </h1> */}
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl text-gray-600 leading-relaxed">
           Learn more about Carakara's nootropic and adaptogenic drinks
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
          {products.map((product) => (
            <div key={product.id} className="relative">
              {/* Image with subtle frame effect */}
              <div className="mb-12">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                  {/* Subtle shadow border effect */}
                  <div className="absolute inset-0 border border-gray-100 z-10 pointer-events-none"></div>
                  
                  {!imageErrors[product.id] ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-all duration-700 hover:scale-105"
                      onError={() => handleImageError(product.id)}
                      priority
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="text-7xl mb-6 text-gray-300">🥤</div>
                        <div className="text-xl font-light text-gray-400">{product.name}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Professional Text Layout */}
              <div className="space-y-8">
                {/* Product Header with decorative line */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-px bg-gray-300 mr-4"></div>
                    <span className="text-sm font-medium tracking-widest uppercase text-gray-500">
                      {product.subtitle}
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-normal text-black tracking-tight mb-4">
                    {product.name}
                  </h2>
                </div>

                {/* Features in a minimal grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Description with refined typography */}
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed tracking-wide">
                    {product.description.split('. ')[0]}.
                  </p>
                  
                  <div className="border-l-2 border-gray-200 pl-6 py-1">
                    <p className="text-gray-500 leading-relaxed">
                      {product.description.split('. ').slice(1).join('. ')}
                    </p>
                  </div>
                </div>

                {/* Subtle call-to-action */}
                <div className="pt-8">
                  <button className="group relative inline-flex items-center text-sm font-medium text-gray-700 hover:text-black transition-colors duration-300">
                    <span className="mr-3">Discover {product.name}</span>
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-800 group-hover:w-full transition-all duration-500"></span>
                  </button>
                </div>
              </div>

              {/* Subtle decorative element */}
              <div className="absolute -z-10 top-1/4 -right-4 w-64 h-64 bg-gradient-to-br from-gray-50 to-transparent opacity-50"></div>
            </div>
          ))}
        </div>

        {/* Professional divider */}
        {/* <div className="mt-32 pt-16 border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-light text-black mb-6">
              Experience the synergy of nature and science
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Both formulas are meticulously crafted using 100% plant-derived ingredients, 
              free from artificial additives, and designed for daily integration into your wellness routine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all duration-300">
                Request Early Access
              </button>
              <button className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-all duration-300">
                View All Products
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}