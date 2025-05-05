import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity } from '../redux-manul/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);


  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h3>Cart</h3>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {cart.map((item) => (
            <li key={item.id} style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong>{item.name}</strong> – ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button onClick={() => dispatch(decrementQuantity(item.id))}>
                    –
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>
                    +
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h4>Total: ₹{total}</h4>
    </div>
  );
};

export default Cart;