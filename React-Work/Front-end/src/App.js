
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import NewProduct from './componets/products/NewProduct';
import Nav1 from './componets/Nav';
 import Login from './componets/Login';
import Signup from './componets/Signup';
import Product from './componets/products/Product';

function App() {
  return (
   
    <>
     <BrowserRouter>
  
    
     <Routes>
     <Route exact path="/" element={<Nav1/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/signup" element={<Signup/>}></Route>
  <Route  path="/product" element={<Product />}></Route>
  <Route  exact path="/product/new" element={<NewProduct />}></Route>
  
  </Routes>  
        
        </BrowserRouter>
    
    </>
     
    
  );
}

export default App;
