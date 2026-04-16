import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cart, searchQuery, setSearchQuery } = useCart();

  return (
    <header className="header">
      <Link to="/" className="logo">
        <h2>E-COMMERCE STORE</h2>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="header-search">
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: '0.5rem', 
            borderRadius: '20px', 
            border: '1px solid var(--border)', 
            width: '200px',
            marginRight: '1rem'
          }}
        />
      </div>
      <Link to="/cart" className="cart-link">
        Cart ({cart.length})
      </Link>
    </header>
  );
}

