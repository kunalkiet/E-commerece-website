import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { products } from '../utils/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) return <div>Product not found</div>;

  return (
    <>
      <h1>{product.name}</h1>
      <div className="product-detail" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '800px', margin: '0 auto'}}>
        <img src={product.image} alt={product.name} style={{width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px'}} />
        <div>
          <p className="price" style={{fontSize: '2rem'}}>₹{product.price.toLocaleString()}</p>
          <p>Lorem ipsum dolor sit amet, product description here. High quality, best in market.</p>
          <div style={{margin: '1rem 0'}}>
            <label>Quantity: </label>
            <button onClick={() => setQty(Math.max(1, qty-1))}>-</button>
            <span style={{margin: '0 1rem'}}>{qty}</span>
            <button onClick={() => setQty(qty+1)}>+</button>
          </div>
          <button onClick={() => {
            for(let i = 0; i < qty; i++) addToCart(product);
            setQty(1);
          }} className="add-btn" style={{fontSize: '1.1rem'}}>Add {qty > 1 ? `${qty}x ` : ''}to Cart</button>
        </div>
      </div>
    </>
  );
}



