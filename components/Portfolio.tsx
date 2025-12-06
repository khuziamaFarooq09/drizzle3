export default function Portfolio() {
  const items = [
    { src: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', alt: 'Dress design' },
    { src: 'https://images.unsplash.com/photo-1506629905607-0b5b8b5b9b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', alt: 'Suit design' },
    { src: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', alt: 'Casual wear' },
    { src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', alt: 'Evening gown' },
  ]

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-lg text-gray-600">A glimpse of our craftsmanship and creativity.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition">
              <img src={item.src} alt={item.alt} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}