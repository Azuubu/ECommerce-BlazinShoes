import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 800);
  }, []);

  return (
    <div>
      <div className={isPageLoaded ? 'spinnerHidden' : 'spinner'}></div>

      <div
        className={
          isPageLoaded ? 'layout mainPage loadedPage' : 'layout mainPage notLoadedPage'
        }
      >
        <Head>
          <title>Blazin</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main className="main-container">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>

      {/* <div className="layout">
        <Head>
          <title>Blazin</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main className="main-container">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div> */}
    </div>
  );
}
