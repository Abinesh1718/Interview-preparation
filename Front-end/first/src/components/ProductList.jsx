// ProductList.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementQuantity, incrementQuantity } from '../redux-manul/cartActions';
import products from '../data/products';

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.payment);

  const getQuantity = (productId) => {
    const item = cart?.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', padding: '2rem' }}>
      {products?.map(product => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '10px' }}>

          <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>

          {getQuantity(product.id) === 0 ? <button
            onClick={() => dispatch(addToCart(product))}
            style={{ padding: '0.5rem 1rem', background: '#2ed573', border: 'none', color: 'white', borderRadius: '5px', cursor: 'pointer' }}
          >
            Add to Cart
          </button> :
            <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={() => dispatch(decrementQuantity(product.id))}
                style={{ padding: '5px 10px' }}
                disabled={getQuantity(product.id) === 0}
              >
                –
              </button>
              <span>{getQuantity(product.id)}</span>
              <button
                onClick={() => dispatch(incrementQuantity(product.id))}
                style={{ padding: '5px 10px' }}
              >
                +
              </button>
            </div>}
        </div>
      ))}
    </div>)
};

export default ProductList;
