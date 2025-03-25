export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-pink-600 mb-8">Welcome to Gigi Nails! 💅</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">Fun Designs</h2>
            <p className="text-gray-600">Explore our collection of creative and colorful nail designs!</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">Easy Tutorials</h2>
            <p className="text-gray-600">Learn how to create amazing nail art with our step-by-step guides!</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">Safety First</h2>
            <p className="text-gray-600">Tips and tricks for safe and fun nail art experiences!</p>
          </div>
        </div>
      </div>
    </div>
  )
} 