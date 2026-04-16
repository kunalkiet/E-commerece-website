export default function Contact() {
  return (
    <>
      <h1>Contact Us</h1>
      <p>Email: info@ecommercestore.com</p>
      <p>Phone: +1 234 567 890</p>
      <form style={{maxWidth: '500px', margin: '2rem 0'}}>
        <input placeholder="Name" style={{width: '100%', padding: '1rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid var(--border)'}} />
        <input type="email" placeholder="Email" style={{width: '100%', padding: '1rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid var(--border)'}} />
        <textarea placeholder="Message" rows="5" style={{width: '100%', padding: '1rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid var(--border)'}} />
        <button type="submit" className="add-btn" style={{width: '100%'}}>Send Message</button>
      </form>
    </>
  );
}

