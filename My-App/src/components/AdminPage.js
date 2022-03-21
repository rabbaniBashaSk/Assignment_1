import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, removeSelectedProduct } from '../redux/actions/productActions';

const AdminPage = (props) => {
    const { product } = props;
    const [products, setProducts] = useState([]);

  useEffect(() => {
    props.fetchProducts();
  }, []);

  useEffect(() => {
    setProducts(product);
  }, [product]);

  const removeItem = (id) => {
    props.removeSelectedProduct(id);     
  }

  return (
    <div className='ui celled list' style={{ marginTop:'70px' }}>
        <Link to='/add' className='ui button blue' style={{ marginBottom: '15px' }}>
              <i className='plus square outline icon' style={{ color: "#fff", cursor: "pointer" }} /> Add New Product
          </Link>
        {
            products.map((product) => (
                <div className='item'>
                    <div className='content'>
                        <div className='header'>
                            {product.title}
                        </div>
                        <div><b>Category: </b>{product.category}</div>
                        <div><b>Price: </b>Rs. {product.price}</div>
                        <div><b>Description: </b>{product.description}</div>
                    </div>
                    <div style={{marginTop: '15px'}}>
                    <button className='ui button red' onClick={() => removeItem(product.id)}>
                    <i className='trash alternate outline icon' style={{color:"#fff", cursor:"pointer"}} />Delete Product
                    </button>
                    <Link to={{ pathname: `/edit/${product.id}`}} className='ui button blue'>
                      <i className='edit alternate outline icon' style={{color:"#fff", cursor:"pointer"}} /> Edit Product
                    </Link>
                    </div>
                </div>

            ))
        }
    </div>
  )
}

const mapStateToProps = (state) => ({
  product: state.allProducts.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: params => dispatch(fetchProducts({
    payload: params
  })),
  removeSelectedProduct: params => dispatch(removeSelectedProduct({
    payload: params
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
