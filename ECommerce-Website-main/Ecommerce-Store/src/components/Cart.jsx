export default function Cart({ totalAmt, cart, removeFromCart }) {
  if (cart.length === 0) {
    return <p className="empty-cart">Your cart is empty!</p>;
  }

  return (
    <div className="cart">
      <h2>Your Cart ({cart.length})</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.name} width="60" />
          <div>
            <span>{item.name}</span>
            <span className="item-price">₹{item.price.toLocaleString()}</span>
          </div>
          <button onClick={() => removeFromCart(index)} className="remove-btn">
            Remove
          </button>
        </div>
      ))}
      <h3>Total: ₹{totalAmt.toLocaleString()}</h3>
    </div>
  );
}

