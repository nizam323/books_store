import './App.css';
import './responsive.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductCards from './components/ProductCard';

function App() {
  return (
    <>
      <Navbar />
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
    </>
  );
}

export default App;