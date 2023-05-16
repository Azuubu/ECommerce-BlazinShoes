import React, { useEffect, useState } from 'react';
import scssStyles from '../styles/Home.module.scss';
import { HeroBanner, Product, FooterBanner } from '@/components';
import { client } from '../lib/client';
const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="productsHeading">
        <h2>Best Selling Products</h2>
        <p>Amazing shoes for anyone!</p>
      </div>

      <div className="productsContainer">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
