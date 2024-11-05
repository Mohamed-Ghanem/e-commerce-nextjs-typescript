"use client";

import { clearCart, removeItem } from '@/app/store/cartSlice';
import { RootState } from '@/app/store/store';
import { useSelector, useDispatch } from 'react-redux';

export default function Cart() {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemove = (id: number) => {
        dispatch(removeItem({ id }));
    };

    const handleClear = () => {
        dispatch(clearCart());
    };

    return (
        <div className="bg-gray-100 text-black h-full p-20">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.product.title} (Quantity: {item.quantity}) (Price: {item.product.price}x{item.quantity}={item.product.price * item.quantity})
                                <button onClick={() => handleRemove(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <div>Total: {cartItems.reduce((acc, curr) => acc += curr.product.price * curr.quantity, 0)}</div>
                    <button onClick={handleClear}>Clear Cart</button>
                </>
            )}
        </div>
    );
} 