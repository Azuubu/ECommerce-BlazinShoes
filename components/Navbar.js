import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './';

import { useStateContext } from '@/context/StateContext';

export default function Navbar() {
  const { showCart, setShowCart, totalQty } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Blazin Shoes</Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => {
          setShowCart(true);
        }}
      >
        <AiOutlineShopping />
        {totalQty > 0 && <span className="cart-item-qty">{totalQty}</span>}
      </button>
      {showCart && <Cart />}
    </div>
  );
}
