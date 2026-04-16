import Cart from '../components/Cart';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cart, totalAmt, removeFromCart } = useCart();

  return (
    <>
      <h1>Shopping Cart</h1>
      <Cart cart={cart} totalAmt={totalAmt} removeFromCart={removeFromCart} />
      {totalAmt > 0 && (
        <div style={{textAlign: 'center', margin: '2rem 0'}}>
          <Link to="/shop" className="add-btn" style={{marginRight: '1rem'}}>Continue Shopping</Link>
          <Link to="/payment" className="add-btn" style={{background: 'green'}}>Checkout (₹{totalAmt.toLocaleString()})</Link>
        </div>
      )}
    </>
  );
}

