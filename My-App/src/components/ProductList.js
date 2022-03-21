import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../redux/actions/productActions';

const ProductList = (props) => {
  const { products } = props;
  const [mensProducts, setMensProducts] = useState([]);
  const [womensProducts, setWomensProducts] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const size = 3;

  useEffect(() => {
    if (products) {
      setMensProducts(products.filter((item) => item.category === "men's clothing"));
      setWomensProducts(products.filter((item) => item.category === "women's clothing"));
      setElectronics(products.filter((item) => item.category === "electronics"));
      setJewelery(products.filter((item) => item.category === "jewelery"));
    }
  }, [products]);



  useEffect(() => {
    props.fetchProducts();
  }, []);

  return (
    <div className='ui celled list' style={{ marginTop: '70px' }}>
      <div>
        <h2>Men's Clothing</h2>
        <div className='four column wide'>
          <div className='ui link cards'>
            {
              mensProducts.slice(0, size).map((product) => (
                <Link className='card' to={{ pathname: `/productCard?${product.category}` }}>
                  <div className='image'>
                    <img src={product.image} alt="Product Image" width="150" height="150" />
                  </div>
                  <div className='content'>
                    <div className='header'>
                      {product.title}
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
      <div>
        <h2 style={{ marginTop: '30px' }}>Women's Clothing</h2>
        <div className='ui grid container'>
          <div className='ui link cards'>
            {
              womensProducts.slice(0, size).map((product) => (
                <Link className='card' to={{ pathname: `/productCard?${product.category}` }}>
                  <div className='image'>
                    <img src={product.image} alt="Product Image" width="150" height="150" />
                  </div>
                  <div className='content'>
                    <div className='header'>
                      {product.title}
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
      <div>
        <h2 style={{ marginTop: '30px' }}>Electronics</h2>
        <div className='ui grid container'>
          <div className='ui link cards'>
            {
              electronics.slice(0, size).map((product) => (
                <Link className='card' to={{ pathname: `/productCard?${product.category}` }}>
                  <div className='image'>
                    <img src={product.image} alt="Product Image" width="150" height="150" />
                  </div>
                  <div className='content'>
                    <div className='header'>
                      {product.title}
                    </div>

                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
      <div>
        <h2 style={{ marginTop: '30px' }}>Jewelery</h2>
        <div className='ui grid container'>
          <div className='ui link cards'>
            {
              jewelery.slice(0, size).map((product) => (
                <Link className='card' to={{ pathname: `/productCard?${product.category}` }}>
                  <div className='image'>
                    <img src={product.image} alt="Product Image" width="150" height="150" />
                  </div>
                  <div className='content'>
                    <div className='header'>
                      {product.title}
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.allProducts.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: params => dispatch(fetchProducts({
    payload: params
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);