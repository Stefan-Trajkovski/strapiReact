import { Link, Route,BrowserRouter as Router, Routes } from "react-router-dom";
import SiteHeader from './components/SiteHeader';
import Homepage from './pages/Homepage';
import ReviewDetails from './pages/ReviewDetails';
import ProductDetails from "./pages/ProductDetails";
import Category from './pages/Category';
import useFetch from "./components/hooks/useFetch";
import React from "react";
import Reviews from "./pages/Reviews";


function App() {

       
       
      





return (
<div>

<SiteHeader></SiteHeader>
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        </Routes>
        </Router>





        
        {/* <Router>  
      <Link to="Category/:Papa"><h1>Ninja Reviews</h1></Link>
      <Link to="Homepage"><h2>Homepage</h2></Link>
      </Router>
        
       */}
      </div>
    
  );
}

export default App;
