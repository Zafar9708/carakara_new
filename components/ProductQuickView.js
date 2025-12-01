'use client'

import { useState } from 'react'
import { X, Plus, Minus, Heart, Star, Truck, Shield, RotateCcw } from 'lucide-react'

export default function ProductQuickView({ isOpen, onClose, product }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('regular')
  const [isFavorite, setIsFavorite] = useState(false)

  if (!isOpen) return null

  const sizes = [
    { id: 'small', name: 'Small', price: product.price - 1 },
    { id: 'regular', name: 'Regular', price: product.price },
    { id: 'large', name: 'Large', price: product.price + 2 }
  ]

  const features = [
    { icon: <Truck size={18} />, text: 'Free delivery on orders over $50' },
    { icon: <Shield size={18} />, text: '30-day money back guarantee' },
    { icon: <RotateCcw size={18} />, text: 'Easy returns within 7 days' }
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Product Image */}
          <div className="bg-gray-100 p-8 flex items-center justify-center">
            <div className="w-full h-64 lg:h-80 bg-gray-200 rounded-xl flex items-center justify-center">
              <span className="text-gray-500 text-lg">Product Image</span>
            </div>
          </div>

          {/* Product Details */}
          <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-black">{product.name}</h2>
                <p className="text-gray-600 mt-1">{product.uniqueWords}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < product.rating ? 'text-black fill-current' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-gray-600 text-sm">({product.rating}) • 124 reviews</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-black">${product.currentPrice}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.discount && (
                  <span className="bg-black text-white px-2 py-1 rounded text-sm font-semibold">
                    {product.discount}
                  </span>
                )}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-semibold text-black mb-3">Size</h3>
              <div className="grid grid-cols-3 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`p-3 border-2 rounded-lg text-center transition-all ${
                      selectedSize === size.id
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="font-semibold">{size.name}</div>
                    <div className="text-sm">${size.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-semibold text-black mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100"
                >
                  <Minus size={16} />
                </button>
                <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-6">
              <button className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                Add to Cart - ${(product.currentPrice * quantity).toFixed(2)}
              </button>
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className="w-full border-2 border-black text-black py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
              >
                <Heart size={20} className={isFavorite ? 'fill-current' : ''} />
                <span>{isFavorite ? 'Saved' : 'Save for Later'}</span>
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 mb-3">
                  <div className="text-black">{feature.icon}</div>
                  <span className="text-gray-700 text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}