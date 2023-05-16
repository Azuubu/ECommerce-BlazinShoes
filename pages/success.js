import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { runConfetti } from '@/lib/utility';
import { useStateContext } from '@/context/StateContext';

function Success() {
  const { setCartItems, setTotalPrice, setTotalQty } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQty(0);
    runConfetti();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank You for shopping with us</h2>
        <p className="email-msg">Check your email for the details</p>
        <p className="description">
          If You have any questions, please send your message to blazin.shoes@gmail.com
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Success;
