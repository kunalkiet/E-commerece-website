import { useCart } from '../context/CartContext';

export default function ProductCard({ product, addToCart }) {
  const { wishlist, toggleWishlist } = useCart();
  const isInWishlist = wishlist.includes(product.id);
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} loading="lazy" />
      <h4>{product.name}</h4>
      <p className="price">₹{product.price.toLocaleString()}</p>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={() => addToCart(product)} className="add-btn">
          Add to Cart
        </button>
        <button 
          onClick={() => toggleWishlist(product.id)} 
          style={{ 
            background: 'none', 
            border: 'none', 
            fontSize: '1.2rem', 
            cursor: 'pointer',
            color: isInWishlist ? 'red' : 'gray'
          }}
        >
          ♥
        </button>
      </div>
    </div>
  );
}

