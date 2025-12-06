export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Design Your Dream Wardrobe
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Premium fabric clothes designing with bespoke craftsmanship. From concept to creation, we bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  )
}