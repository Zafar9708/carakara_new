// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'

// export default function SimpleBigCards() {
//   const [imageErrors, setImageErrors] = useState({})

//   const handleImageError = (productId) => {
//     setImageErrors(prev => ({ ...prev, [productId]: true }))
//   }

//   const products = [
//     {
//       id: 1,
//       name: "Carakara Calm",
//       subtitle: "Adaptogenic Relaxation Formula",
//       image: "/images/b1.jpg",
//       description: "Carakara Calm is a functional adaptogen drink crafted to help you unwind, recover, and reset. Formulated with botanicals and amino acids, it gently lowers stress, supports emotional balance, and prepares your mind for deep rest and recovery. Designed for modern lives filled with deadlines, decisions, and digital noise, Carakara Calm helps you slow down with intention so you can show up restored, grounded, and ready to become your best self.",
//       features: ["Stress Reduction", "Emotional Balance", "Deep Rest", "Natural Recovery"]
//     },
//     {
//       id: 2,
//       name: "Carakara Focus",
//       subtitle: "Nootropic Cognitive Enhancer",
//       image: "/images/b2.jpg", 
//       description: "Carakara Focus is a nootropic-forward drink crafted to sharpen your mind without overstimulating your body. Powered by natural caffeine, amino acids, and botanicals, it delivers calm, sustained clarity that helps you think deeper, move faster, and stay present through the demands of your day. No jitters, no crashes — just focused energy that feels clean, steady, and intentional.",
//       features: ["Mental Clarity", "Sustained Focus", "Clean Energy", "No Jitters"]
//     }
//   ]

//   return (
//     <section id="image-cards" className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header - Professional typography */}
//         <div className="text-center mb-20">
//           <div className="inline-block mb-6">
//             <span className="text-2xl font-medium tracking-widest uppercase text-gray-500 border-b border-gray-200 pb-2">
//               Coming Soon
//             </span>
//           </div>
//           {/* <h1 className="text-5xl md:text-6xl font-light text-black tracking-tight mb-6">
//             Mindful Performance
//           </h1> */}
//           <div className="max-w-2xl mx-auto">
//             <p className="text-2xl text-gray-600 leading-relaxed">
//            Learn more about Carakara's nootropic and adaptogenic drinks
//             </p>
//           </div>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
//           {products.map((product) => (
//             <div key={product.id} className="relative">
//               {/* Image with subtle frame effect */}
//               <div className="mb-12">
//                 <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
//                   {/* Subtle shadow border effect */}
//                   <div className="absolute inset-0 border border-gray-100 z-10 pointer-events-none"></div>
                  
//                   {!imageErrors[product.id] ? (
//                     <Image
//                       src={product.image}
//                       alt={product.name}
//                       fill
//                       className="object-cover transition-all duration-700 hover:scale-105"
//                       onError={() => handleImageError(product.id)}
//                       priority
//                     />
//                   ) : (
//                     <div className="flex items-center justify-center h-full">
//                       <div className="text-center">
//                         <div className="text-7xl mb-6 text-gray-300">🥤</div>
//                         <div className="text-xl font-light text-gray-400">{product.name}</div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Professional Text Layout */}
//               <div className="space-y-8">
//                 {/* Product Header with decorative line */}
//                 <div>
//                   <div className="flex items-center mb-6">
//                     <div className="w-16 h-px bg-gray-300 mr-4"></div>
//                     <span className="text-sm font-medium tracking-widest uppercase text-gray-500">
//                       {product.subtitle}
//                     </span>
//                   </div>
                  
//                   <h2 className="text-4xl md:text-5xl font-normal text-black tracking-tight mb-4">
//                     {product.name}
//                   </h2>
//                 </div>

//                 {/* Features in a minimal grid */}
//                 <div className="grid grid-cols-2 gap-3 mb-8">
//                   {product.features.map((feature, index) => (
//                     <div key={index} className="flex items-center">
//                       <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
//                       <span className="text-sm font-medium text-gray-700">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Description with refined typography */}
//                 <div className="space-y-6">
//                   <p className="text-gray-600 leading-relaxed tracking-wide">
//                     {product.description.split('. ')[0]}.
//                   </p>
                  
//                   <div className="border-l-2 border-gray-200 pl-6 py-1">
//                     <p className="text-gray-500 leading-relaxed">
//                       {product.description.split('. ').slice(1).join('. ')}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Subtle call-to-action */}
//                 <div className="pt-8">
//                   <button className="group relative inline-flex items-center text-sm font-medium text-gray-700 hover:text-black transition-colors duration-300">
//                     <span className="mr-3">Discover {product.name}</span>
//                     <svg 
//                       className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
//                       fill="none" 
//                       stroke="currentColor" 
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                     <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-800 group-hover:w-full transition-all duration-500"></span>
//                   </button>
//                 </div>
//               </div>

//               {/* Subtle decorative element */}
//               <div className="absolute -z-10 top-1/4 -right-4 w-64 h-64 bg-gradient-to-br from-gray-50 to-transparent opacity-50"></div>
//             </div>
//           ))}
//         </div>

//         {/* Professional divider */}
//         {/* <div className="mt-32 pt-16 border-t border-gray-100">
//           <div className="max-w-3xl mx-auto text-center">
//             <h3 className="text-2xl font-light text-black mb-6">
//               Experience the synergy of nature and science
//             </h3>
//             <p className="text-gray-600 mb-8 leading-relaxed">
//               Both formulas are meticulously crafted using 100% plant-derived ingredients, 
//               free from artificial additives, and designed for daily integration into your wellness routine.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all duration-300">
//                 Request Early Access
//               </button>
//               <button className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-all duration-300">
//                 View All Products
//               </button>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   )
// }

'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function SimpleBigCards() {
  const [imageErrors, setImageErrors] = useState({})
  const [hoveredIngredient, setHoveredIngredient] = useState(null)

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

  const ingredients = [
    {
      id: 1,
      name: "Ashwagandha",
      description: "In a world obsessed with caffeine and convenience, ancient wisdom offers a quiet counterpoint: Ashwagandha - a herb that doesn't just fight stress but rebuilds resilience from within. The outcome? More stable energy, calmer mood, sharper focus — and a body that bends, not breaks, under pressure.",
      icon: "🌿"
    },
    {
      id: 2,
      name: "Brahmi",
      description: "Known for centuries as the herb of enlightenment, Brahmi has been used by yogis, scholars, and healers to enhance intellect, focus, and emotional balance. Modern neuroscience has validated Brahmi's cognitive claims across four key dimensions: memory enhancement and stress modulation.",
      icon: "🧠"
    },
    {
      id: 3,
      name: "L-Theanine",
      description: "L-Theanine is a natural amino acid found almost exclusively in the leaves of green tea (Camellia sinensis) and certain mushrooms. While caffeine excites the nervous system, L-Theanine gently modulates it, creating a unique state of calm alertness. This is the sweet spot that Carakara aims to create - not hyper-focus, not sedation, but flow.",
      icon: "🍃"
    },
    {
      id: 4,
      name: "Yerba Mate",
      description: "Native to South America and traditionally consumed as a social ritual, Yerba Mate offers a different kind of energy. One that is alert, focused, and remarkably balanced. Unlike coffee, Yerba Mate delivers stimulation through a complex matrix of compounds.",
      icon: "🌱"
    },
    {
      id: 5,
      name: "Chamomile",
      description: "Often dismissed as a simple bedtime tea, chamomile is anything but simple. Used for centuries across cultures as a calming botanical, chamomile works not by sedating the body, but by gently signalling safety to the nervous system. The result? A quieter mind, smoother emotional regulation, and relaxation that feels natural, not forced.",
      icon: "🌸"
    },
    {
      id: 6,
      name: "Magnesium",
      description: "Magnesium is one of the most critical and most deficient minerals in the modern body. Required for over 300 enzymatic reactions, it acts as a master regulator of stress, recovery, and nervous-system balance. The outcome is foundational calm: steadier nerves, improved recovery, and a nervous system that can truly downshift when the day is done.",
      icon: "⚡"
    }
  ]

  return (
    <section id="image-cards" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-8 tracking-tight uppercase">
            MINDFUL PRESENCE AND PRODUCTIVITY<br />ARE THE TRUE COMPETITIVE ADVANTAGE
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed">
              From high-performing professionals and athletes to creators, students, and parents - focused energy and calm clarity are the real edge. Choose your fuel wisely!
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
                  <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-4 uppercase">
                    {product.name}
                  </h2>
                  <p className="text-xl text-gray-600 font-medium mb-8">
                    {product.subtitle}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="space-y-6">
                  <div className="flex items-start mb-4">
                    <div className="mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <p className="text-lg text-gray-600">
                      In this world full of distraction and an increasing pressure to do it all, choose Carakara {product.id === 1 ? "Focus" : "Calm"} with ingredients that help you:
                    </p>
                  </div>
                  
                  {product.bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 mt-2 flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-8">
                  <button className="group relative inline-flex items-center text-lg font-medium text-gray-800 hover:text-black transition-colors duration-300">
                    <span className="mr-4">Explore {product.name.split(' ')[1]}</span>
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-500"></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ingredients Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              At Carakara, every ingredient is chosen not for hype, but for how it helps the mind and body adapt, perform, and recover naturally.
            </h2>
          </div>

          {/* Carousel Style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ingredients.map((ingredient) => (
              <div 
                key={ingredient.id}
                className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredIngredient(ingredient.id)}
                onMouseLeave={() => setHoveredIngredient(null)}
              >
                {/* Background Blur Effect */}
                <div className={`absolute inset-0 transition-all duration-700 ${
                  hoveredIngredient === ingredient.id ? 'opacity-20 blur-sm' : 'opacity-0'
                }`}>
                  <div className="w-full h-full bg-gradient-to-br from-green-50 to-gray-50"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-8">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{ingredient.icon}</span>
                    <h3 className="text-2xl font-bold text-black">{ingredient.name}</h3>
                  </div>
                  
                  <div className={`transition-all duration-500 ${
                    hoveredIngredient === ingredient.id ? 'opacity-100 max-h-96' : 'opacity-70 max-h-32'
                  } overflow-hidden`}>
                    <p className="text-gray-700 leading-relaxed">
                      {ingredient.description}
                    </p>
                  </div>
                  
                  {/* Expand indicator */}
                  <div className="mt-6 flex items-center text-gray-500 text-sm">
                    <span className="mr-2">Hover to read more</span>
                    <svg 
                      className={`w-4 h-4 transform transition-transform duration-300 ${
                        hoveredIngredient === ingredient.id ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <div className="inline-block">
              <button className="px-10 py-4 bg-black text-white text-lg font-medium rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore All Ingredients
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}