import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchSelectedProduct } from '../redux/actions/productActions';

const ProductDetail = (props) => {
  const { selectedProduct } = props;
  const [product, setProduct] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    setProduct(selectedProduct);
  }, [selectedProduct]);

  useEffect(() => {
    const prodId = pathname.split('/')[2];
    if (prodId) {
      props.fetchSelectedProduct(prodId);
    }
  }, [pathname]);

  return (
    <div className='main' style={{ marginTop: '70px' }}>
      {
        product && product.title && (
          <><div className='four column wide'>
            <div className='ui link cards'>
              <div className='card'>
                <div className='image'>
                  <img src={product.image} alt="Product Image" width="200" height="200" />
                </div>
                <div className='content'>
                  <div className='header'>
                    {product.title}
                  </div>
                  <div className='meta'><b>Category: </b>{product.category}</div>
                  <div className='meta price'><b>Price: </b>Rs.{product.price}</div>
                  <div className='meta'><b>Description: </b>{product.description}</div>
                </div>
              </div>
            </div>

          </div></>
        )
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  selectedProduct: state.allProducts.selectedProduct,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSelectedProduct: params => dispatch(fetchSelectedProduct({
    payload: params
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
