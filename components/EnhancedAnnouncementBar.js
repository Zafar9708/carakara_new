'use client'

import { useState, useEffect } from 'react'
import { Facebook, Instagram, Twitter, Youtube, X } from 'lucide-react'

export default function EnhancedAnnouncementBar() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  const announcements = [
    {
      text: "Free shipping when you spend over $50",
      bgColor: "bg-[#7B3F00]",
    },
    {
      text: "Save up to 50% off with code: FRESH",
      bgColor: "bg-[#1B4D3E]", 
    },
    {
      text: "Stock up and save with a week's supply",
      bgColor: "bg-[#374151]", 
    }
  ]

  const handleClose = () => {
    setIsVisible(false)
  }

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setProgress(0)
      setCurrentAnnouncement((prev) => 
        prev === announcements.length - 1 ? 0 : prev + 1
      )
    }, 2000)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 50 
      })
    }, 1000)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [isVisible, announcements.length])

  if (!isVisible) return null

  return (
    <div className={`${announcements[currentAnnouncement].bgColor} text-white relative`}>
 
      <div className="h-1 bg-black bg-opacity-20">
        <div 
          className="h-full bg-white bg-opacity-50 transition-all duration-1000 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Announcement Text - Center */}
          <div className="flex-1 text-center">
            <p className="text-sm font-medium animate-fade-in">
              {announcements[currentAnnouncement].text}
            </p>
          </div>

          {/* Social Media Icons - Right Side */}
          <div className="hidden md:flex items-center space-x-3 mr-8">
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
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}