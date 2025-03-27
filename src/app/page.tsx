import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-primary">Gigi Nails</h1>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/gallery" className="nav-link">Gallery</Link>
              <Link href="/services" className="nav-link">Services</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </nav>
            <button className="btn-primary">Book Now</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Gigi Nails
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Your destination for beautiful, kid-friendly nail art and care. 
            We specialize in creating magical moments for young nail enthusiasts!
          </p>
          <div className="flex justify-center gap-6">
            <button className="btn-primary text-lg px-8 py-3">View Our Services</button>
            <button className="btn-outline text-lg px-8 py-3">Book Appointment</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-pink-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-primary text-4xl mb-4">💅</div>
              <h4 className="text-xl font-semibold text-primary mb-4">Kids Manicure</h4>
              <p className="text-gray-600">Gentle nail care and polish application perfect for little hands</p>
              <p className="text-primary font-semibold mt-4">From $15</p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-pink-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-primary text-4xl mb-4">👣</div>
              <h4 className="text-xl font-semibold text-primary mb-4">Kids Pedicure</h4>
              <p className="text-gray-600">Fun and relaxing foot care with cute designs</p>
              <p className="text-primary font-semibold mt-4">From $20</p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-pink-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-primary text-4xl mb-4">🎨</div>
              <h4 className="text-xl font-semibold text-primary mb-4">Nail Art</h4>
              <p className="text-gray-600">Creative and colorful designs for the ultimate nail experience</p>
              <p className="text-primary font-semibold mt-4">From $10</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">👧</div>
              <h4 className="text-lg font-semibold mb-2">Kid-Friendly</h4>
              <p className="text-gray-600">Safe and fun environment for children</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h4 className="text-lg font-semibold mb-2">Safe Products</h4>
              <p className="text-gray-600">Non-toxic and gentle on young nails</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h4 className="text-lg font-semibold mb-2">Expert Staff</h4>
              <p className="text-gray-600">Trained in working with children</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h4 className="text-lg font-semibold mb-2">Fun Experience</h4>
              <p className="text-gray-600">Making every visit memorable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Book Your Appointment?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Give your child the magical nail experience they deserve!
          </p>
          <button className="btn-primary text-lg px-8 py-3">
            Book Now
          </button>
        </div>
      </section>
    </div>
  )
} 