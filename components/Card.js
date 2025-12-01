export default function Card({ title, description, icon }) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-black transition-all duration-300 hover:shadow-lg">
      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}