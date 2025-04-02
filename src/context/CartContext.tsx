
import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Define types for Cart items and context
interface CartItem {
  id: number;
  name: string;
  price: number;
  images: string[];
  quantity: number;
  size?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: any, quantity: number, size?: string) => void;
  removeFromCart: (item: CartItem) => void;
  updateQuantity: (item: CartItem, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
}

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Define actions for reducer
type CartAction = 
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: CartItem }
  | { type: 'UPDATE_QUANTITY'; payload: { item: CartItem; quantity: number } }
  | { type: 'CLEAR_CART' };

// Define reducer function
const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.findIndex(
        item => item.id === action.payload.id && 
                (item.size === action.payload.size || 
                  (!item.size && !action.payload.size))
      );
      
      if (existingItemIndex !== -1) {
        // Item exists, update quantity
        return state.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        // Add new item
        return [...state, action.payload];
      }
    }
    
    case 'REMOVE_ITEM':
      return state.filter(item => 
        !(item.id === action.payload.id && item.size === action.payload.size)
      );
    
    case 'UPDATE_QUANTITY':
      return state.map(item => 
        (item.id === action.payload.item.id && item.size === action.payload.item.size)
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    
    case 'CLEAR_CART':
      return [];
    
    default:
      return state;
  }
};

// Create provider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state from localStorage or empty array
  const [cartItems, dispatch] = useReducer(
    cartReducer,
    JSON.parse(localStorage.getItem('cart') || '[]')
  );
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  
  // Calculate cart total
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  // Cart actions
  const addToCart = (product: any, quantity: number, size?: string) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        images: product.images,
        quantity,
        size
      }
    });
  };
  
  const removeFromCart = (item: CartItem) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };
  
  const updateQuantity = (item: CartItem, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { item, quantity } });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal
  };
  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook for using the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
};
