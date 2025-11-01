export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-primary">As Multi</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Your trusted partner in smart online shopping
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Mission */}
          <section className="bg-dark-card rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              At As Multi, our mission is to simplify online shopping by bringing together products from multiple
              e-commerce platforms into one convenient location. We believe that finding the best deals shouldn't
              require visiting dozens of websites. That's why we've created a platform that aggregates products
              from Amazon, Daraz, AliExpress, eBay, and Walmart, allowing you to compare prices and features
              effortlessly.
            </p>
          </section>

          {/* What We Do */}
          <section className="bg-dark-card rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Multi-Platform Aggregation</h3>
                  <p className="leading-relaxed">
                    We fetch and display products from five major e-commerce platforms, giving you access to
                    millions of products in one place.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Price Comparison</h3>
                  <p className="leading-relaxed">
                    Our comparison tool allows you to view up to 4 products side-by-side, making it easy to
                    identify the best value for your money.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Real-Time Updates</h3>
                  <p className="leading-relaxed">
                    We continuously update our product listings to ensure you always have access to the latest
                    prices and availability information.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Easy Navigation</h3>
                  <p className="leading-relaxed">
                    Browse products by category, search for specific items, and filter results to find exactly
                    what you're looking for.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Platforms */}
          <section className="bg-dark-card rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">Supported Platforms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center p-4 bg-dark rounded-lg border border-gray-700">
                <div className="bg-orange-600 text-white font-bold px-4 py-2 rounded mr-4">A</div>
                <div>
                  <h3 className="text-white font-semibold">Amazon</h3>
                  <p className="text-gray-400 text-sm">World's largest online retailer</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-dark rounded-lg border border-gray-700">
                <div className="bg-pink-600 text-white font-bold px-4 py-2 rounded mr-4">D</div>
                <div>
                  <h3 className="text-white font-semibold">Daraz</h3>
                  <p className="text-gray-400 text-sm">Leading platform in South Asia</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-dark rounded-lg border border-gray-700">
                <div className="bg-red-600 text-white font-bold px-4 py-2 rounded mr-4">A</div>
                <div>
                  <h3 className="text-white font-semibold">AliExpress</h3>
                  <p className="text-gray-400 text-sm">Global marketplace from China</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-dark rounded-lg border border-gray-700">
                <div className="bg-yellow-600 text-white font-bold px-4 py-2 rounded mr-4">E</div>
                <div>
                  <h3 className="text-white font-semibold">eBay</h3>
                  <p className="text-gray-400 text-sm">Auction and shopping website</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-dark rounded-lg border border-gray-700">
                <div className="bg-blue-600 text-white font-bold px-4 py-2 rounded mr-4">W</div>
                <div>
                  <h3 className="text-white font-semibold">Walmart</h3>
                  <p className="text-gray-400 text-sm">American retail corporation</p>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="bg-dark-card rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">Our Values</h2>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                <span className="text-primary font-semibold">Transparency:</span> We believe in honest affiliate
                marketing. All our product links are clearly marked as affiliate links, and we disclose our
                relationships with partner platforms.
              </p>
              <p className="leading-relaxed">
                <span className="text-primary font-semibold">User-First:</span> Your shopping experience is our
                priority. We continuously improve our platform based on user feedback and needs.
              </p>
              <p className="leading-relaxed">
                <span className="text-primary font-semibold">Quality:</span> We strive to provide accurate,
                up-to-date information to help you make informed purchasing decisions.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
