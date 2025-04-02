
import React, { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you for subscribing!');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-teal-600 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6 opacity-90">
            Get updates on new products, special offers, and exclusive content delivered to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none"
              required
            />
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-md font-medium transition-colors disabled:opacity-75"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          
          <p className="mt-4 text-sm opacity-80">
            By subscribing, you agree to our Privacy Policy and to receive marketing communications from us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
