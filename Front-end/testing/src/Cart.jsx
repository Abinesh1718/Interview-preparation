import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from './redux/Slice';

function Cart() {
    const cart = useSelector(state => state.Cart)
    console.log("CORSS", cart);
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Cart Data</h1>
            {cart?.map((data,i) => (
                <div>{data}
                    <button onClick={() => dispatch(remove(i))} >Remove Cart</button>
                </div>

            ))}
        </div>
    )
}

export default Cart