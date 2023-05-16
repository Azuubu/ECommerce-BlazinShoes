import React from 'react';
import Link from 'next/link';
import { urlFor } from '@/lib/client';
import { useStateContext } from '@/context/StateContext';

export default function Product({
  product: { image, name, slug, price },
  changeQtyOnClick,
}) {
  return (
    <div>
      <Link href={`/product/${slug.current}`} onClick={changeQtyOnClick}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">£{price}</p>
        </div>
      </Link>
    </div>
  );
}
