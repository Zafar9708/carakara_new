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
      name: "CARAKARA FOCUSED ENERGY",
      subtitle: "BRAHMI + L-THEANINE + CAFFEINE. THE ULTIMATE PRODUCTIVITY HACK",
      image: "/images/b2.jpg",
      bullets: [
        "Stay sharp through a mounting inbox, long meetings, and moments that matter.",
        "Train, compete, and recover with clean, controlled energy. Without overstimulation.",
        "Glide past the afternoon slump with steady energy. No crash, no jitters.",
        "Stay present, engaged, and clear-headed. Without the hangover."
      ]
    },
    {
      id: 2,
      name: "CARAKARA CALM CLARITY",
      subtitle: "ASHWAGANDHA + L-THEANINE + MAGNESIUM. THE ULTIMATE FORMULA FOR CLARITY.",
      image: "/images/b1.jpg", 
      bullets: [
        "Quiet the mental chatter and return to a grounded, open state where ideas can settle.",
        "Support physical recovery and mental relaxation after training. Without dullness or sedation.",
        "Stay patient, emotionally balanced, and present through busy evenings and bedtime routines.",
        "Let go of built-up tension and feel gently relaxed. No heaviness, no fog."
      ]
    }
  ]

  return (
    <section id="image-cards" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 tracking-tight uppercase">
            MINDFUL PRESENCE AND PRODUCTIVITY
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 tracking-tight uppercase">
            ARE THE TRUE COMPETITIVE ADVANTAGE
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              From high-performing professionals and athletes to creators,<br />
              students, and parents - focused energy and calm clarity are the real edge.<br></br>
               Choose your fuel wisely!
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 mb-32">
          {products.map((product) => (
            <div key={product.id} className="relative">
              {/* Image */}
              <div className="mb-12">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
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

              {/* Product Content */}
              <div className="space-y-8">
                {/* Product Header */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-4 uppercase">
                    {product.name}
                  </h2>
                  <p className="text-lg text-gray-600 font-medium mb-8">
                    {product.subtitle}
                  </p>
                </div>

                {/* Bullet Points */}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}