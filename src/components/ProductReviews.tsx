
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { toast } from 'sonner';

interface ProductReviewsProps {
  product: any;
}

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
}

const ProductReviews = ({ product }: ProductReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>(product.reviews || []);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setNewReview(prev => ({ ...prev, rating }));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newReview.name.trim() || !newReview.comment.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const review: Review = {
        id: Date.now(),
        name: newReview.name,
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toISOString().split('T')[0]
      };
      
      setReviews(prev => [review, ...prev]);
      setNewReview({
        name: '',
        rating: 5,
        comment: ''
      });
      
      setIsSubmitting(false);
      toast.success('Review submitted successfully!');
    }, 1000);
  };

  // Calculate average rating
  const averageRating = reviews.length 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : '0.0';

  return (
    <div className="mt-16 border-t border-gray-200 pt-10">
      <h2 className="text-2xl font-semibold mb-8">Customer Reviews</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Review Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-center mb-4">
              <div className="text-5xl font-bold">{averageRating}</div>
              <div className="flex justify-center my-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star 
                    key={star}
                    size={20}
                    className={star <= parseFloat(averageRating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <p className="text-gray-600">Based on {reviews.length} reviews</p>
            </div>
            
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map(rating => {
                const count = reviews.filter(r => r.rating === rating).length;
                const percentage = reviews.length ? Math.round((count / reviews.length) * 100) : 0;
                
                return (
                  <div key={rating} className="flex items-center text-sm">
                    <div className="w-8">{rating}</div>
                    <div className="w-4 mx-2">
                      <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    </div>
                    <div className="flex-grow">
                      <div className="bg-gray-200 rounded-full h-2 w-full">
                        <div 
                          className="bg-yellow-400 h-2 rounded-full" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-12 text-right text-gray-500">{percentage}%</div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Add Review Form */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Add Your Review</h3>
            <form onSubmit={handleSubmitReview}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={newReview.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Rating
                </label>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(rating => (
                    <button 
                      type="button"
                      key={rating}
                      onClick={() => handleRatingChange(rating)}
                      className="p-1"
                    >
                      <Star 
                        size={24}
                        className={rating <= newReview.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Review
                </label>
                <textarea 
                  id="comment"
                  name="comment"
                  rows={4}
                  value={newReview.comment}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md transition-colors disabled:opacity-75"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          </div>
        </div>
        
        {/* Review Listing */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">{reviews.length} Reviews</h3>
          
          {reviews.length === 0 ? (
            <div className="text-center py-10 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {reviews.map(review => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
                        {review.avatar ? (
                          <img 
                            src={review.avatar} 
                            alt={review.name}
                            className="w-10 h-10 rounded-full"
                          />
                        ) : (
                          review.name.charAt(0).toUpperCase()
                        )}
                      </div>
                    </div>
                    <div className="ml-4 flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium">{review.name}</h4>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex mb-2">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Star 
                            key={star}
                            size={16}
                            className={star <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
