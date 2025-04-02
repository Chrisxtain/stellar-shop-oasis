
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { Trash2, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto py-16 px-4 flex flex-col items-center justify-center">
          <ShoppingCart size={64} className="text-gray-300 mb-6" />
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Discover our amazing products and add them to your cart</p>
          <Link to="/products">
            <Button className="bg-teal-600 hover:bg-teal-700">
              Continue Shopping
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-3xl font-semibold mb-8">Your Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-100">
                <div className="col-span-6">
                  <span className="font-medium">Product</span>
                </div>
                <div className="col-span-2 text-center">
                  <span className="font-medium">Price</span>
                </div>
                <div className="col-span-2 text-center">
                  <span className="font-medium">Quantity</span>
                </div>
                <div className="col-span-2 text-right">
                  <span className="font-medium">Subtotal</span>
                </div>
              </div>
              
              {cartItems.map(item => (
                <div key={`${item.id}-${item.size || 'default'}`} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b border-gray-100">
                  <div className="col-span-6 flex gap-4 items-center">
                    <div className="w-16 h-16 bg-gray-50 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src={item.images[0]} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <Link to={`/product/${item.id}`} className="font-medium hover:text-teal-600 transition-colors">
                        {item.name}
                      </Link>
                      {item.size && <p className="text-sm text-gray-500">Size: {item.size}</p>}
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 flex md:justify-center items-center">
                    <span className="md:hidden font-medium mr-2">Price:</span>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                  
                  <div className="md:col-span-2 flex md:justify-center items-center">
                    <span className="md:hidden font-medium mr-2">Quantity:</span>
                    <div className="flex items-center border rounded-md">
                      <button 
                        className="px-2 py-1 border-r"
                        onClick={() => updateQuantity(item, Math.max(1, item.quantity - 1))}
                      >
                        -
                      </button>
                      <span className="px-3 py-1">{item.quantity}</span>
                      <button 
                        className="px-2 py-1 border-l"
                        onClick={() => updateQuantity(item, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 flex justify-between md:justify-end items-center">
                    <span className="md:hidden font-medium mr-2">Subtotal:</span>
                    <div className="flex items-center gap-3">
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      <button 
                        onClick={() => removeFromCart(item)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="p-4 flex justify-between">
                <button 
                  onClick={clearCart}
                  className="text-sm text-gray-600 hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <Trash2 size={16} />
                  Clear Cart
                </button>
                <Link to="/products" className="text-sm text-teal-600 hover:text-teal-700 transition-colors">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold">${cartTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-md font-medium transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
