import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';

export default function HeroBanner({ heroBanner }) {
  return (
    <div className="heroBannerContainer">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1 className="behindHeroText">{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="shoes" className="hero-banner-image" />

        <div>
          <div className="desc hideOnMobile">
            <h5>{heroBanner.desc}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
