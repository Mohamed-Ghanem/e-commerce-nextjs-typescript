'use client';
import { RootState } from '@/app/store/store';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);

    return (
        <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
            <h1>My Store</h1>
            <nav>
                <Link href="/">Home</Link> | <Link href="/cart">Cart {cartItems.length ? cartItems.reduce((acc, curr) => acc += curr.quantity, 0) : 0}</Link>
            </nav>
        </header>
    );
};

export default Header;