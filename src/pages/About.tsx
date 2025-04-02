
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="bg-teal-50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Our Story</h1>
            <p className="text-lg text-center max-w-3xl mx-auto text-gray-600">
              Stellar Shop Oasis was founded with a simple mission: to provide high-quality products 
              that enhance your lifestyle while respecting our planet.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                alt="Our Store" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">How It All Started</h2>
              <p className="text-gray-600">
                In 2015, our founder Sarah Johnson noticed a gap in the market for sustainable, 
                high-quality home products that didn't compromise on style or function. With a 
                background in design and a passion for sustainability, Sarah launched Stellar 
                Shop Oasis from her apartment with just 5 products.
              </p>
              <p className="text-gray-600">
                Today, we've grown to offer hundreds of carefully curated items, but our core 
                principles remain the same: exceptional quality, ethical production, and outstanding 
                customer service.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-teal-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-600">
                We test every product rigorously before it enters our catalog to ensure it meets our high standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-teal-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Sourcing</h3>
              <p className="text-gray-600">
                We work with suppliers who share our commitment to ethical production and environmental responsibility.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-teal-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
              <p className="text-gray-600">
                Our team is available 7 days a week to help with any questions or concerns about your purchase.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 my-16">
            <h2 className="text-3xl font-semibold mb-6 text-center">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                { name: 'Sarah Johnson', title: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
                { name: 'Michael Chen', title: 'Design Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
                { name: 'Leila Patel', title: 'Product Manager', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
                { name: 'David Kim', title: 'Customer Experience', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
              ].map((person, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{person.name}</h3>
                  <p className="text-gray-500">{person.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
