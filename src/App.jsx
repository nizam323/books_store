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
import { createContext, useState } from 'react';
import AddToCart from './UIs/AddToCart';

export const globalStates = createContext();

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showNavSideBar, setShowNavSideBar] = useState(false);

  return (
    <globalStates.Provider value={{ showCart, setShowCart, showNavSideBar, setShowNavSideBar }}>
      {/* <Navbar /> */}
      {/* <Herosection />
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
      <Footer /> */}

      {/* <Navbar /> */}
      {/* <ProductDetailPage /> */}
      {/* <Footer />  */}

      {/* <Signin /> */}
      {/* <Signup /> */}

      <Navsidebar />
      <AddToCart />

    </globalStates.Provider>
  );
}

export default App;