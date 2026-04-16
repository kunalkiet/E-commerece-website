import ProductList from '../components/ProductList';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { products } from '../utils/products';

export default function Home() {
  const { addToCart } = useCart();

  return (
    <>
      <section className="hero-section">
        <h1>Welcome to E-Commerce Store</h1>
        <p>Discover amazing products at great prices. Shop now!</p>
      </section>
      <h2>Featured Products</h2>
      <ProductList products={products.slice(0, 6)} addToCart={addToCart} />
      <div style={{textAlign: 'center', margin: '2rem 0'}}>
        <Link to="/shop" className="add-btn" style={{fontSize: '1.2rem', padding: '1rem 2rem'}}>View All Products</Link>
      </div>
    </>
  );
}



