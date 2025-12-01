'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    // support: [
    //   { name: 'Contact Us', href: '/contact' },
    //   { name: 'FAQ', href: '/faq' },
    // ],
    // legal: [
    //   { name: 'Terms of Service', href: '/terms' },
    //   { name: 'Privacy Policy', href: '/privacy' },
    // ]
  }

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20 border-b border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="mb-8">
  <Link href="/" className="inline-flex items-center space-x-3 group">
    
    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white">
      <Image 
        src="/images/Logo.jpg" 
        alt="Carakara Logo"
        width={40}
        height={40}
        className="object-cover"
      />
    </div>

    <span className="text-2xl font-light tracking-tight">Carakara</span>
  </Link>
</div>
              
              <div className="space-y-6 max-w-lg">
                <p className="text-gray-300 leading-relaxed">
                  Prashma's Growberry Pvt Ltd pioneers plant-based nootropic and adaptogenic beverages, 
                  combining ancient wisdom with modern science to enhance cognitive performance naturally.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <p className="text-gray-300">
                        4R-503 Gurjinder Vihar, AWHO, Sector Chi1
                      </p>
                      <p className="text-gray-400 text-sm">
                        Knowledge Park-I, Gautam Buddha Nagar, 201310, INDIA
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-8">
                    <div className="flex items-center space-x-3">
                      <Mail className="text-gray-400" size={18} />
                      <a href="mailto:info@carakara.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                        info@carakara.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-6">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p>
                © {currentYear} Prashma's Growberry Pvt Ltd (Carakara). All rights reserved.
              </p>
              {/* <p className="mt-1">
                GSTIN: 09AAICP1234M1Z5 • FSSAI License No: 12345678901234
              </p> */}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="py-12 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-light text-white mb-4">
              Stay Updated on Wellness Innovation
            </h4>
            <p className="text-gray-400 text-sm mb-6">
              Subscribe for exclusive updates on new formulations and wellness insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-white transition-colors duration-300 text-white text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-300 text-sm rounded"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-xs mt-3">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </div>
        </div> */}
      </div>
    </footer>
  )
}