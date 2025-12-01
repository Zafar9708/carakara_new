'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, User, CheckCircle, Building, Globe } from 'lucide-react'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 5000)
  }

  const contactMethods = [
    {
      icon: <Building className="text-black" size={20} />,
      title: "Corporate Office",
      details: "Prashma's Growberry Pvt Ltd",
      description: "4R-503 Gurjinder Vihar, AWHO",
      extra: "Sector Chi1, Knowledge Park-I",
      address: "Gautam Buddha Nagar, 201310, INDIA",
      action: "https://maps.google.com"
    },
    {
      icon: <Mail className="text-black" size={20} />,
      title: "Email",
      details: "info@carakara.com",
      description: "Business Inquiries",
      extra: "hello@carakara.com",
      address: "Customer Support",
      action: "mailto:info@carakara.com"
    },
    // {
    //   icon: <Phone className="text-black" size={20} />,
    //   title: "Phone",
    //   details: "+91 98765 43210",
    //   description: "Monday to Friday",
    //   extra: "9:00 AM - 6:00 PM IST",
    //   address: "Business Hours",
    //   action: "tel:+919876543210"
    // },
    // {
    //   icon: <Globe className="text-black" size={20} />,
    //   title: "Connect",
    //   details: "Follow us online",
    //   description: "@carakara.wellness",
    //   extra: "Latest updates & offers",
    //   address: "Social Media",
    //   action: null
    // }
  ]

  const faqItems = [
    {
      question: "Where are Carakara drinks manufactured?",
      answer: "All Carakara beverages are manufactured in our state-of-the-art facility in Greater Noida, adhering to strict quality control standards and using only 100% plant-based ingredients."
    },
    {
      question: "Do you offer wholesale or bulk orders?",
      answer: "Yes, we provide wholesale pricing for businesses, gyms, and wellness centers. Contact our corporate sales team at info@carakara.com for customized bulk order solutions."
    },
    {
      question: "What makes Carakara drinks different?",
      answer: "Our drinks combine traditional adaptogenic herbs with modern nootropic science, using only natural ingredients with clinically studied benefits for cognitive function and stress relief."
    }
  ]

  return (
    <section className="py-32 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with professional typography */}
        <div className="text-center mb-24">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium tracking-widest uppercase text-gray-500 border-b border-gray-200 pb-2">
              Get In Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-black tracking-tight mb-8">
            Connect With Us
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              Interested in our plant-based nootropics? Have questions about formulations? 
              Reach out—our team is here to guide you through wellness.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Information - Professional Layout */}
          <div>
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-px bg-gray-300 mr-4"></div>
                <h3 className="text-2xl font-normal text-black tracking-tight">
                  Contact Information
                </h3>
              </div>
              
              <div className="space-y-8">
                {contactMethods.map((method, index) => (
                  <div key={index} className="group relative pl-10">
                    <div className="absolute left-0 top-0 w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center bg-white">
                      {method.icon}
                    </div>
                    
                    <div className="border-l border-gray-200 pl-8">
                      <h4 className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-2">
                        {method.title}
                      </h4>
                      
                      <div className="space-y-1 mb-3">
                        <p className="text-lg font-normal text-black">{method.details}</p>
                        {method.description && (
                          <p className="text-gray-600">{method.description}</p>
                        )}
                        {method.extra && (
                          <p className="text-gray-600">{method.extra}</p>
                        )}
                        {method.address && (
                          <p className="text-gray-600 text-sm">{method.address}</p>
                        )}
                      </div>
                      
                      {method.action && (
                        <a 
                          href={method.action}
                          className="inline-flex items-center text-sm font-medium text-black hover:text-gray-700 transition-colors duration-300 group/link"
                        >
                          <span className="mr-2">Contact via {method.title.toLowerCase()}</span>
                          <svg 
                            className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                          <span className="absolute bottom-0 left-8 w-0 h-px bg-black group-hover/link:w-[calc(100%-2rem)] transition-all duration-500"></span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info - Professional Box */}
            <div className="pt-8 border-t border-gray-100">
              <div className="flex items-start space-x-4">
                <MessageCircle className="text-black mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-2">
                    Response Time
                  </h4>
                  <p className="text-gray-700">
                    We're committed to responding to all inquiries within 24 business hours. 
                    For urgent corporate matters, please call our direct line.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Professional Design */}
          <div className="relative">
            {isSubmitted ? (
              <div className="text-center py-16 border border-gray-100 rounded-xl">
                <div className="w-20 h-20 border-2 border-black rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="text-black" size={40} />
                </div>
                <h4 className="text-2xl font-normal text-black mb-4 tracking-tight">Message Received</h4>
                <div className="max-w-sm mx-auto">
                  <p className="text-gray-600 leading-relaxed">
                    Thank you for reaching out. Our team will review your inquiry 
                    and respond within 24 business hours.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-px bg-gray-300 mr-4"></div>
                  <h3 className="text-2xl font-normal text-black tracking-tight">
                    Send a Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3.5 border-b border-gray-300 focus:border-black transition-all duration-300 bg-transparent focus:outline-none"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3.5 border-b border-gray-300 focus:border-black transition-all duration-300 bg-transparent focus:outline-none"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-3">
                      Inquiry Type
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border-b border-gray-300 focus:border-black transition-all duration-300 bg-transparent focus:outline-none appearance-none"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="corporate">Corporate & Wholesale</option>
                      <option value="product">Product Information</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="distributor">Distributor Inquiry</option>
                      <option value="investor">Investor Relations</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border-b border-gray-300 focus:border-black transition-all duration-300 bg-transparent focus:outline-none resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`group relative w-full py-4 px-6 text-black font-medium transition-all duration-500 flex items-center justify-center space-x-3 ${
                        isSubmitting 
                          ? 'bg-gray-100 cursor-not-allowed' 
                          : 'hover:bg-black hover:text-white border border-black'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500"></span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section - Professional Layout */}
        <div className="mt-32 pt-20 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="text-sm font-medium tracking-widest uppercase text-gray-500 border-b border-gray-200 pb-2">
                  Common Questions
                </span>
              </div>
              <h3 className="text-3xl font-light text-black tracking-tight mb-8">
                Frequently Asked
              </h3>
            </div>
            
            <div className="space-y-8">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-8 last:border-b-0 last:pb-0">
                  <h4 className="text-lg font-normal text-black mb-4">
                    {item.question}
                  </h4>
                  <div className="border-l-2 border-gray-200 pl-6 py-1">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 pt-12 border-t border-gray-100 text-center">
              <p className="text-gray-600 mb-8">
                Have a different question? Our team is ready to assist you with 
                product formulations, wholesale opportunities, or partnership inquiries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:info@carakara.com" 
                  className="px-8 py-3.5 border border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300"
                >
                  Email Corporate Team
                </a>
                {/* <a 
                  href="tel:+919876543210" 
                  className="px-8 py-3.5 bg-black text-white font-medium hover:bg-gray-800 transition-all duration-300"
                >
                  Call Direct Line
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}