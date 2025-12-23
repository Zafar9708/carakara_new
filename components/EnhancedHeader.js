'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, X, MapPin, ChevronDown, Menu } from 'lucide-react'
import Image from 'next/image'

export default function ResponsiveHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCountryOpen, setIsCountryOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isOffersOpen, setIsOffersOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState('IND') // Changed default to IND
  const [imageErrors, setImageErrors] = useState({})

  // Countries data
  const countries = [
    { code: 'IND', name: 'INDIA' },
    { code: 'UK', name: 'UNITED KINGDOM' },
    { code: 'USA', name: 'UNITED STATES' },
    { code: 'AU', name: 'Australia' },
    { code: 'DE', name: 'Germany' }
  ]

  // Products data
  const products = [
    {
      id: 1,
      name: 'Carakara Calm',
      image: '/images/b1.jpg',
    },
    {
      id: 2,
      name: 'Carakara Focus',
      image: '/images/b2.jpg',
    },
  ]

  const bestSellers = products
  const categories = ['All', 'Carakara Calm', 'Carakara Focus']

  const handleImageError = (productId) => {
    setImageErrors(prev => ({ ...prev, [productId]: true }))
  }

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close all modals when scrolling
  useEffect(() => {
    if (isScrolled) {
      setIsSearchOpen(false)
      setIsCountryOpen(false)
    }
  }, [isScrolled])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu')) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMobileMenuOpen])

  // Smooth scroll function to ImageCards
  const scrollToImageCards = () => {
    const imageCardsSection = document.getElementById('image-cards');
    if (imageCardsSection) {
      imageCardsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Smooth scroll function to ContactUs
  const scrollToContactUs = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const selectedCountryData = countries.find(country => country.code === selectedCountry)

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-3 group">
                {/* Logo Image Container */}
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/50 group-hover:border-white transition-all duration-300">
                  {/* Logo Image - Replace with your actual logo */}
                  <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">C</span>
                    {/* If you have a logo image, use this instead: */}
                    <Image
                      src="/images/Logo.jpg" // Your logo image path
                      alt="Carakara Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <span className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-black group-hover:text-green-600' : 'text-white group-hover:text-green-300'
                } hidden lg:inline`}>
                </span>
              </Link>
              <Link 
                href="/" 
                className={`font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-gray-950 hover:text-black' : 'text-white hover:text-gray-200'
                }`}
              >
                {/* Home */}
              </Link>
              <button 
                onClick={scrollToContactUs}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-gray-950 hover:text-black' : 'text-white hover:text-gray-200'
                }`}
              >
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors duration-200 ${
                isScrolled ? 'text-gray-950 hover:text-black' : 'text-white hover:text-gray-200'
              }`}
            >
              <Menu size={24} />
            </button>

            {/* Center Logo */}
            <div className="flex-1 text-center lg:flex-none">
              <h1 className={`text-2xl lg:text-3xl font-bold mr-12 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}>
                Coming Soon
              </h1>
            </div>

            {/* Right Icons - Search and Country Removed */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              {/* Country Selector - Commented out */}
              {/* <div className="hidden sm:block relative">
                <button
                  onClick={() => setIsCountryOpen(!isCountryOpen)}
                  className={`flex items-center space-x-2 transition-colors duration-200 ${
                    isScrolled ? 'text-gray-950 hover:text-black' : 'text-white hover:text-gray-200'
                  }`}
                >
                  <MapPin size={18} />
                  <span className="text-sm">
                    {selectedCountry}
                  </span>
                  <ChevronDown size={16} />
                </button>

                {isCountryOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {countries.map((country) => (
                      <button
                        key={country.code}
                        onClick={() => {
                          setSelectedCountry(country.code)
                          setIsCountryOpen(false)
                        }}
                        className="flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-gray-950">{country.name}</span>
                        <span className="text-gray-400 text-sm">({country.code})</span>
                      </button>
                    ))}
                  </div>
                )}
              </div> */}

              {/* Search Icon - Commented out */}
              {/* <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`transition-colors duration-200 ${
                  isScrolled ? 'text-gray-700 hover:text-black' : 'text-white hover:text-gray-200'
                }`}
              >
                <Search size={20} />
              </button> */}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 mobile-menu">
            <div className="px-4 py-6">
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    // Scroll to top if already on home page
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="font-medium text-gray-950 hover:text-black transition-colors py-2 text-left"
                >
                  Home
                </button>
                {/* <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    scrollToContactUs()
                  }}
                  className="font-medium text-gray-700 hover:text-black transition-colors py-2 text-left"
                >
                  Contact Us
                </button> */}
                
                {/* Mobile Country Selector - Commented out */}
                {/* <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-950 mb-3">
                    <MapPin size={18} />
                    <span>Select Country</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {countries.map((country) => (
                      <button
                        key={country.code}
                        onClick={() => {
                          setSelectedCountry(country.code)
                          setIsMobileMenuOpen(false)
                        }}
                        className={`flex items-center justify-between p-3 rounded border text-left ${
                          selectedCountry === country.code 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-sm font-medium">{country.name}</span>
                        <span className="text-xs text-gray-500">({country.code})</span>
                      </button>
                    ))}
                  </div>
                </div> */}
              </nav>
            </div>
          </div>
        )}

        {/* Search Panel - Commented out */}
        {/* {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 py-6 max-h-screen overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Search Products</h3>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Search Input */}
              {/* <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search our products..."
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Left Side - Categories */}
                {/* <div className="lg:col-span-1">
                  <h4 className="font-semibold text-gray-900 mb-4">Product Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className="block text-left text-gray-600 hover:text-black transition-colors w-full py-2 px-2 rounded hover:bg-gray-50"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Side - Best Sellers */}
                {/* <div className="lg:col-span-3">
                  <h4 className="font-semibold text-gray-900 mb-4">Our Products</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {bestSellers.map((product) => (
                      <div key={product.id} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 border border-gray-200 rounded-lg">
                        <div className="relative flex-shrink-0">
                          {!imageErrors[product.id] ? (
                            <div className="w-20 h-20 relative">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover rounded-lg"
                                onError={() => handleImageError(product.id)}
                              />
                            </div>
                          ) : (
                            <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                              <span className="text-gray-500 text-sm">Image</span>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                          <h5 className="font-semibold text-gray-900">{product.name}</h5>
                          {/* Removed price and rating sections */}
                        {/* </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )} */}
      </header>

      {/* Hero Section with Background Image */}
      <section 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/b1.jpg")',
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Content container */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
            <div className="max-w-2xl">
              
              {/* Main Headline */}
              <div className="mb-8 lg:mb-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  CLEAN AND SPARKLING  FUEL<br />
                  ROOTED IN ANCIENT WISDOM<br />
                  AND BACKED BY MODERN SCIENCE
                </h1>
              </div>
              
              {/* Description */}
              <div className="mb-12 lg:mb-16">
                <p className="text-lg sm:text-xl text-gray-200 mb-6 leading-relaxed">
                  Our plant-based drinks are expertly formulated with powerful botanicals and 
                  essential nutrients specifically chosen to enhance mental performance.
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <span className="text-white font-medium text-lg">100% Natural Ingredients</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <span className="text-white font-medium text-lg">Zero  Sugar</span>
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              {/* <div>
                <button 
                  onClick={scrollToImageCards}
                  className="group bg-green-500 hover:bg-green-600 text-white px-10 py-4 sm:px-12 sm:py-5 rounded-xl font-bold text-lg sm:text-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="flex items-center space-x-3">
                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div> */}
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}