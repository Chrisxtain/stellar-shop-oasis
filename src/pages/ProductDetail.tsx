
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { toast } from 'sonner';
import ProductReviews from '@/components/ProductReviews';
import RelatedProducts from '@/components/RelatedProducts';
import { useCart } from '@/context/CartContext';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    // Find the product in our data
    const foundProduct = products.find(p => p.id === parseInt(productId || '0'));
    if (foundProduct) {
      setProduct(foundProduct);
      // Reset selected image when product changes
      setSelectedImage(0);
      setQuantity(1);
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto py-16 px-4 flex items-center justify-center">
          <p>Loading product...</p>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`Added ${quantity} ${quantity > 1 ? 'items' : 'item'} to cart`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg overflow-hidden aspect-square">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image: string, index: number) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square border-2 rounded-md overflow-hidden 
                    ${selectedImage === index ? 'border-teal-500' : 'border-transparent'}`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">{product.category}</p>
              <h1 className="text-3xl font-semibold">{product.name}</h1>
              <div className="flex items-center mt-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star 
                      key={star}
                      size={18}
                      className={star <= product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600 text-sm">
                  ({product.reviews?.length || 0} reviews)
                </span>
              </div>
            </div>
            
            <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
            
            <div className="prose max-w-none text-gray-600">
              <p>{product.description}</p>
            </div>
            
            <div className="pt-4">
              <p className="font-medium mb-2">Quantity</p>
              <div className="flex items-center border rounded-md w-32">
                <button 
                  className="px-3 py-2 border-r"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="px-4 py-2 flex-1 text-center">{quantity}</span>
                <button 
                  className="px-3 py-2 border-l"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-md flex items-center justify-center gap-2 transition-colors"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 py-3 px-8 rounded-md flex items-center justify-center gap-2 transition-colors">
                <Heart size={20} />
                Wishlist
              </button>
            </div>
          </div>
        </div>
        
        <ProductReviews product={product} />
        <RelatedProducts currentProductId={product.id} category={product.category} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
