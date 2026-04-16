import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Payment() {
  const { clearCart } = useCart();
  const handlePayment = () => {
    // Simulate payment success - clear cart
    clearCart();
    alert('Payment successful! Cart cleared.');
  };

  return (
    <>
      <h1>Payment</h1>
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Card Number:</label>
          <input type="text" placeholder="1234 5678 9012 3456" style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }} />
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ flex: 1 }}>
            <label>Expiry Date:</label>
            <input type="text" placeholder="MM/YY" style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label>CVV:</label>
            <input type="text" placeholder="123" style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }} />
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button onClick={handlePayment} className="add-btn" style={{ background: 'green', color: 'white' }}>
            Confirm Payment
          </button>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            <Link to="/cart" style={{ color: 'blue' }}>← Back to Cart</Link>
          </p>
        </div>
      </div>
    </>
  );
}
