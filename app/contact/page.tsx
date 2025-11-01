'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission logic
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-dark-card rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            
            {submitted && (
              <div className="mb-6 bg-green-600/20 border border-green-600 text-green-400 px-4 py-3 rounded">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-dark text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-dark-card rounded-lg p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">support@asmulti.com</p>
                    <p className="text-gray-400">info@asmulti.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Address</h3>
                    <p className="text-gray-400">123 Commerce Street</p>
                    <p className="text-gray-400">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-card rounded-lg p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">FAQ</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-white font-semibold mb-2">How do I use the comparison tool?</h3>
                  <p className="text-gray-400 text-sm">
                    Click the comparison icon on any product card to add it to the comparison tool. You can compare up to 4 products at once.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Are the prices real-time?</h3>
                  <p className="text-gray-400 text-sm">
                    We update our product listings regularly, but prices may vary. Always check the final price on the retailer's website.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Do you sell products directly?</h3>
                  <p className="text-gray-400 text-sm">
                    No, we are an affiliate platform. When you click "Buy Now," you'll be redirected to the retailer's website to complete your purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
