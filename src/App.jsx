import './App.css';
import './responsive.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductCards from './components/ProductCard';
import ProductDetailPage from './components/ProductDetailPage';
import Herosection from './components/Herosection';
import Signin from './UIs/Signin';
import Signup from './UIs/Signup';
import Navsidebar from './UIs/NavSideBar';
import { useState } from 'react';

function App() {
  const [showCart, setShowCart] = useState(true);
  return (
    <>
      {/* <Navbar /> */}
      <Herosection />
      <div className="sec-4">
        <div className="hd">
          Featured Products
          <div className="hd-border"></div>
        </div>
        <div className="pro-cards-sec">

          <ProductCards />
          <ProductCards />
          <ProductCards />

        </div>
      </div>
      <Footer />

      {/* <Navbar />
      <ProductDetailPage />
      <Footer /> */}

      {/* <Signin /> */}
      {/* <Signup /> */}

      {showCart && <Navsidebar />}

    </>
  );
}

export default App;