import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import AdminPage from './AdminPage';
import EditProduct from './EditProduct';
import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';

const App = () => {
  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ProductList />} exact />
          <Route path='/admin' element={<AdminPage />} exact />
          <Route path="/add" element={<AddProduct />} exact />
          <Route path="/edit/:id" element={<EditProduct />} exact />
          <Route path="/productCard" element={<ProductCard />} exact />
          <Route path="/productdetails/:id" element={<ProductDetail />} exact />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
