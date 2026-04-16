import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { products } from '../utils/products';

export default function Wishlist() {
  const { wishlist, addToCart, toggleWishlist } = useCart();

  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  const moveToCart = (product) => {
    addToCart(product);
    toggleWishlist(product.id);
  };

  return (
    <>
      <h1>Wishlist</h1>
      {wishlistProducts.length === 0 ? (
        <p>No wishlist items. <a href="/shop">Browse products!</a></p>
      ) : (
        <div className="product-grid">
          {wishlistProducts.map(product => (
            <div key={product.id} className="product-card-wishlist">
              <ProductCard product={product} addToCart={() => moveToCart(product)} />
              <button 
                onClick={() => toggleWishlist(product.id)} 
                className="remove-wishlist"
                style={{ background: '#ff4444', color: 'white', border: 'none', padding: '0.5rem', borderRadius: '4px', cursor: 'pointer' }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

