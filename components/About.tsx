export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With over a decade of experience, we specialize in creating custom fabric garments that blend style, comfort, and quality.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Fabric design" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Expertise</h3>
            <p className="text-gray-600 mb-4">
              We work with the finest fabrics and employ skilled artisans to craft pieces that tell your story. From casual wear to formal attire, every design is unique.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Custom pattern making</li>
              <li>Premium material sourcing</li>
              <li>Expert tailoring</li>
              <li>Personalized consultations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}