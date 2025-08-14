import React from 'react';

const ProductCard = ({ product, addCart }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => addCart(product)} style={styles.button}>
        Add to Cart
      </button>
    </div>
  );
};



const styles = { 
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '1rem',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    maxHeight: '150px',
    objectFit: 'cover',
    marginBottom: '0.5rem',
  },
  button: {
    backgroundColor: '#2ed573',
    color: '#fff',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ProductCard;
