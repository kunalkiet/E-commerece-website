import { useState } from 'react';
import ProductList from '../components/ProductList';
import { useCart } from '../context/CartContext';
import { products } from '../utils/products';

export default function Shop() {
  const { addToCart, searchQuery } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(100000);

  const getUniqueCategories = () => {
    const cats = products.map(p => p.category).filter(Boolean);
    return ['All', ...new Set(cats)];
  };

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesPrice = p.price <= priceRange;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <>
      <h1>Shop</h1>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: '0.5rem', borderRadius: '4px' }}
        >
          {getUniqueCategories().map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input 
          type="range" 
          min="0" 
          max="100000" 
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          style={{ flex: 1 }}
        />
        <span>Max ₹{priceRange.toLocaleString()}</span>
      </div>
      <ProductList products={filteredProducts} addToCart={addToCart} />
    </>
  );
}



