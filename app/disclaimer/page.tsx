export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Affiliate <span className="text-primary">Disclaimer</span>
          </h1>
          <p className="text-xl text-gray-400">
            Transparency and disclosure information
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 bg-dark-card border border-dark-border rounded-lg p-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Affiliate Disclosure
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              As Multi is a participant in various affiliate marketing programs, 
              including but not limited to the Amazon Associates Program, Daraz 
              Affiliate Program, AliExpress Affiliate Program, eBay Partner Network, 
              and Walmart Affiliate Program. These are affiliate advertising programs 
              designed to provide a means for sites to earn advertising fees by 
              advertising and linking to their respective platforms.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This means that when you click on certain links on this website and 
              make a purchase, we may receive a small commission at no additional 
              cost to you. This helps us maintain and improve our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              How Affiliate Links Work
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you click on a product link or "Buy Now" button on our website, 
              you will be redirected to the respective merchant's website (Amazon, 
              Daraz, AliExpress, eBay, or Walmart). If you make a purchase, we may 
              earn a commission from that sale.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Important:</strong> The price you pay 
              remains the same whether you use our affiliate link or go directly to 
              the merchant's website. You will not pay more by using our links.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Our Commitment to You
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">✓</span>
                <span>
                  <strong className="text-white">Honest Reviews:</strong> We provide 
                  genuine product information and comparisons based on available data 
                  from merchant platforms.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">✓</span>
                <span>
                  <strong className="text-white">No Extra Cost:</strong> Using our 
                  affiliate links does not increase the price you pay for products.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">✓</span>
                <span>
                  <strong className="text-white">Transparency:</strong> We clearly 
                  disclose our affiliate relationships and how we earn commissions.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">✓</span>
                <span>
                  <strong className="text-white">User Choice:</strong> You are never 
                  obligated to use our links and can always visit merchant websites 
                  directly.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Product Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              All product information, including prices, descriptions, images, and 
              availability, is provided by the respective merchant platforms through 
              their APIs. While we strive to keep this information accurate and 
              up-to-date, we cannot guarantee that all information is current or 
              error-free.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We recommend verifying product details, prices, and availability on 
              the merchant's website before making a purchase. Prices and availability 
              are subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Third-Party Transactions
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              As Multi is not responsible for transactions that occur on third-party 
              merchant websites. When you click through to a merchant's website and 
              make a purchase, you are subject to that merchant's terms and conditions, 
              privacy policy, and return policy.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For any issues with orders, shipping, returns, or customer service, 
              please contact the respective merchant directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Privacy and Data
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We respect your privacy. When you use our affiliate links, the merchant 
              may use cookies to track the referral. This is standard practice in 
              affiliate marketing and helps us earn commissions. We do not collect 
              or store your personal payment information or purchase details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Updates to This Disclaimer
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this disclaimer from time to time to reflect changes in 
              our affiliate partnerships or practices. We encourage you to review 
              this page periodically for the latest information.
            </p>
          </section>

          <section className="border-t border-dark-border pt-6 mt-6">
            <p className="text-gray-400 text-sm">
              <strong className="text-white">Last Updated:</strong> November 1, 2025
            </p>
            <p className="text-gray-400 text-sm mt-4">
              If you have any questions about our affiliate relationships or this 
              disclaimer, please{' '}
              <a href="/contact" className="text-primary hover:underline">
                contact us
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
