export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-primary">As Multi</span>
          </h1>
          <p className="text-xl text-gray-400">
            Your trusted multi-affiliate shopping companion
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <section className="bg-dark-card border border-dark-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              At As Multi, we believe shopping should be simple, transparent, and rewarding. 
              Our mission is to bring together the best products from the world's leading 
              e-commerce platforms—Amazon, Daraz, AliExpress, eBay, and Walmart—into one 
              convenient location, making it easier for you to compare prices, read reviews, 
              and find the perfect products for your needs.
            </p>
          </section>

          <section className="bg-dark-card border border-dark-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              As Multi is a multi-affiliate platform that aggregates products from multiple 
              online marketplaces. We provide:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">✓</span>
                <span>Comprehensive product search across multiple platforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">✓</span>
                <span>Side-by-side product comparison tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">✓</span>
                <span>Real-time price tracking and updates</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">✓</span>
                <span>Curated product categories for easy browsing</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">✓</span>
                <span>Direct links to purchase from your preferred platform</span>
              </li>
            </ul>
          </section>

          <section className="bg-dark-card border border-dark-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Partners</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              We partner with the world's most trusted e-commerce platforms to bring you 
              the widest selection of products:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {['Amazon', 'Daraz', 'AliExpress', 'eBay', 'Walmart'].map((platform) => (
                <div
                  key={platform}
                  className="bg-dark border border-primary rounded-lg p-4 text-center"
                >
                  <p className="text-white font-semibold">{platform}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-dark-card border border-dark-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-primary font-semibold mb-2">Save Time</h3>
                <p className="text-gray-300 text-sm">
                  No need to visit multiple websites. Find everything in one place.
                </p>
              </div>
              <div>
                <h3 className="text-primary font-semibold mb-2">Save Money</h3>
                <p className="text-gray-300 text-sm">
                  Compare prices across platforms to get the best deals.
                </p>
              </div>
              <div>
                <h3 className="text-primary font-semibold mb-2">Transparency</h3>
                <p className="text-gray-300 text-sm">
                  Clear affiliate disclosure and honest product information.
                </p>
              </div>
              <div>
                <h3 className="text-primary font-semibold mb-2">User-Friendly</h3>
                <p className="text-gray-300 text-sm">
                  Intuitive interface designed for seamless shopping experience.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-dark-card border border-dark-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              Have questions or suggestions? We'd love to hear from you! Visit our{' '}
              <a href="/contact" className="text-primary hover:underline">
                contact page
              </a>{' '}
              to get in touch with our team.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
