import { createContext, useContext, useState, useEffect } from 'react';
import { products } from '../utils/products';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [orders, setOrders] = useState([]);
  const [totalAmt, setTotalAmt] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedWishlist = localStorage.getItem('wishlist');
    const savedOrders = localStorage.getItem('orders');
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    if (savedOrders) setOrders(JSON.parse(savedOrders));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);
    setTotalAmt(cartTotal);
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(wid => wid !== id) : [...prev, id]
    );
  };

  const completeOrder = () => {
    if (cart.length === 0) return;
    const order = {
      id: Date.now(),
      date: new Date().toISOString(),
      items: [...cart],
      total: totalAmt
    };
    setOrders(prev => [order, ...prev]);
    clearCart();
  };

  const value = { 
    cart, wishlist, orders, totalAmt, searchQuery, 
    setSearchQuery, 
    addToCart, 
    removeFromCart, 
    clearCart, 
    toggleWishlist, 
    completeOrder 
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

