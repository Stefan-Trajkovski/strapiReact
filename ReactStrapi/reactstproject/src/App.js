import { BrowserRouter,Link, Route,BrowserRouter as Router, Routes } from "react-router-dom";
import SiteHeader from './components/SiteHeader';
import Homepage from './pages/Homepage';
import ReviewDetails from './pages/ReviewDetails';
import Category from './pages/Category';

function App() {
  return (
   
      <div className="App">
        <SiteHeader />
        
        <BrowserRouter>  
      <Link to="Homepage"><h1>Ninja Reviews</h1></Link>
      </BrowserRouter>
        
        {/* <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:id" element={<ReviewDetails />} />
          <Route path="/category/:id" element={<Category />} />
        </Routes> */}
      </div>
    
  );
}

export default App;
