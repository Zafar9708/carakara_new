export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Minimal Design,
            <br />
            <span className="bg-black text-white px-2">Maximum Impact</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the power of simplicity with our black and white design philosophy. 
            Where every element serves a purpose and beauty lies in clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
              Get Started
            </button>
            <button className="border-2 border-black text-black px-8 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}