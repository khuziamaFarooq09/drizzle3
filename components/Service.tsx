export default function Services() {
  const services = [
    { title: 'Custom Design', description: 'Tailored designs based on your vision and measurements.', icon: '🎨' },
    { title: 'Fabric Selection', description: 'Access to a wide range of premium fabrics from around the world.', icon: '🧵' },
    { title: 'Alterations', description: 'Professional alterations to perfect your existing wardrobe.', icon: '✂️' },
    { title: 'Consultation', description: 'One-on-one sessions to discuss your style and needs.', icon: '💬' },
  ]

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">Comprehensive design solutions for every occasion.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}