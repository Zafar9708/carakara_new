'use client'

import { useState, useEffect } from 'react'
import { Facebook, Instagram, Twitter, Youtube, X } from 'lucide-react'

export default function AnnouncementBar() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const announcements = [
    {
      text: "Free shipping when you spend over $50",
      bgColor: "bg-[#7B3F00]", // Chocolate color
    },
    {
      text: "Save up to 50% off with code: FRESH",
      bgColor: "bg-[#1B4D3E]", // Dark green color
    },
    {
      text: "Stock up and save with a week's supply",
      bgColor: "bg-[#374151]", // Dark gray color
    }
  ]

  // Close announcement bar
  const handleClose = () => {
    setIsVisible(false)
  }

  // Cycle through announcements
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => 
        prev === announcements.length - 1 ? 0 : prev + 1
      )
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [isVisible, announcements.length])

  if (!isVisible) return null

  return (
    <div className={`${announcements[currentAnnouncement].bgColor} text-white py-2 px-4 relative`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Announcement Text - Center */}
        <div className="flex-1 text-center">
          <p className="text-sm font-medium animate-fade-in">
            {announcements[currentAnnouncement].text}
          </p>
        </div>

        {/* Social Media Icons - Right Side */}
        {/* <div className="hidden md:flex items-center space-x-3">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            <Facebook size={16} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            <Instagram size={16} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            <Twitter size={16} />
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            <Youtube size={16} />
          </a>
        </div> */}

        {/* Close Button */}
        {/* <button
          onClick={handleClose}
          className="md:absolute md:right-4 text-white hover:text-gray-200 transition-colors duration-200"
        >
          <X size={16} />
        </button> */}
      </div>
    </div>
  )
}