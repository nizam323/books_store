import './App.css';
import './responsive.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductDetailPage from './components/ProductDetailPage';
import Signin from './UIs/Signin';
import Signup from './UIs/Signup';
import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import PublicMainPageUI from './UIs/PublicMainPageUI';
import ErrorPage from './UIs/ErrorPage';
import About from './UIs/About';

export const globalStates = createContext();

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showNavSideBar, setShowNavSideBar] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  return (
    <globalStates.Provider value={{ dropDown, setDropDown, showCart, setShowCart, showNavSideBar, setShowNavSideBar }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicMainPageUI />} />
          <Route path="/" element={
            <><Navbar /> <Outlet /><Footer /></>}>
            <Route path="/product-page" element={<ProductDetailPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </globalStates.Provider>
  );
}

export default App;