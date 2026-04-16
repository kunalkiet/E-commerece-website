import { useCart } from '../context/CartContext';

export default function Orders() {
  const { orders } = useCart();

  return (
    <>
      <h1>Order History</h1>
      {orders.length === 0 ? (
        <p>No orders yet. <a href="/shop">Start shopping!</a></p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="order-card" style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem', borderRadius: '8px' }}>
            <h3>Order #{index + 1} - {new Date(order.date).toLocaleDateString()}</h3>
            <p>Total: ₹{order.total.toLocaleString()}</p>
            <ul>
              {order.items.map(item => (
                <li key={item.id}>{item.name} (₹{item.price.toLocaleString()})</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </>
  );
}

