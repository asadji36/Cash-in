export default function DisclaimerPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Affiliate <span className="text-primary">Disclaimer</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Transparency in our affiliate relationships
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Main Disclaimer */}
          <section className="bg-dark-card rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">Affiliate Disclosure</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                As Multi ("we," "us," or "our") operates as an affiliate marketing platform. This means that we
                may earn commissions from qualifying purchases made through links on our website. We want to be
                completely transparent about this relationship with our users.
              </p>
              <p>
                When you click on product links or "Buy Now" buttons on our website and make a purchase, we may
                receive a commission from the retailer at no additional cost to you. These commissions help us
                maintain and improve our platform, allowing us to continue providing free product comparison
                services to our users.
              </p>
            </div>
          </section>

          {/* Partner Platforms */}
          <section className="bg-dark-card rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">Our Partner Platforms</h2>
            <p className="text-gray-300 mb-4">
              We are affiliated with the following e-commerce platforms:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <span className="font-semibold text-white">Amazon:</span> We are a participant in the Amazon
                  Services LLC Associates Program, an affiliate advertising program designed to provide a means
                  for sites to earn advertising fees by advertising and linking to Amazon.com and affiliated sites.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <span className="font-semibold text-white">Daraz:</span> We participate in the Daraz Affiliate
                  Program and may earn commissions from qualifying purchases.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <span className="font-semibold text-white">AliExpress:</span> We are members of the AliExpress
                  Affiliate Program and earn commissions through product referrals.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <span className="font-semibold text-white">eBay:</span> We participate in the eBay Partner
                  Network and may earn fees from qualifying purchases.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <span className="font-semibold text-white">Walmart:</span> We are affiliates of Walmart and
                  may earn commissions from qualifying purchases made through our links.
                </div>
              </li>
            </ul>
          </section>

          {/* No Additional Cost */}
          <section className="bg-dark-card rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">No Additional Cost to You</h2>
            <p className="text-gray-300 leading-relaxed">
              It's important to note that using our affiliate links does not result in any additional cost to you.
              The price you pay for products remains the same whether you use our links or navigate directly to
              the retailer's website. The commission we earn comes from the retailer, not from your pocket.
            </p>
          </section>

          {/* Product Recommendations */}
          <section className="bg-dark-card rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">Our Product Recommendations</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                While we do earn commissions from affiliate links, our primary goal is to provide accurate,
                helpful, and unbiased product information to our users. We strive to:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Display products from multiple platforms to give you comprehensive options
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Provide accurate pricing and product information
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Enable easy comparison between similar products
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Update our listings regularly to reflect current availability and prices
                </li>
              </ul>
            </div>
          </section>

          {/* Price Accuracy */}
          <section className="bg-dark-card rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">Price and Availability</h2>
            <p className="text-gray-300 leading-relaxed">
              While we make every effort to display accurate pricing and product information, prices and
              availability are subject to change without notice. The final price and availability will be
              confirmed on the retailer's website at the time of purchase. We recommend verifying all product
              details, including price, specifications, and availability, on the retailer's website before
              making a purchase.
            </p>
          </section>

          {/* User Responsibility */}
          <section className="bg-dark-card rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">Your Responsibility</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                When you make a purchase through our affiliate links, you are entering into a transaction with
                the respective retailer, not with As Multi. We are not responsible for:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Product quality, defects, or issues
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Shipping, delivery, or fulfillment
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Returns, refunds, or exchanges
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Customer service issues with the retailer
                </li>
              </ul>
              <p>
                For any issues related to your purchase, please contact the retailer directly through their
                customer service channels.
              </p>
            </div>
          </section>

          {/* Updates */}
          <section className="bg-dark-card rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">Updates to This Disclaimer</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this disclaimer from time to time to reflect changes in our affiliate relationships
              or legal requirements. We encourage you to review this page periodically. The "Last Updated" date
              at the bottom of this page indicates when this disclaimer was last revised.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-dark-card rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">Questions?</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about our affiliate relationships or this disclaimer, please don't
              hesitate to contact us through our{' '}
              <a href="/contact" className="text-primary hover:underline">
                contact page
              </a>
              . We're committed to transparency and are happy to address any concerns you may have.
            </p>
          </section>

          {/* Last Updated */}
          <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-800">
            <p>Last Updated: November 1, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
