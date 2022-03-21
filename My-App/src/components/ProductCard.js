import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
    const { products } = props;
    const [product, setProducts] = useState([]);
    const { search } = useLocation();

  useEffect(() => {
    const categeory = decodeURIComponent(search.split('?')[1]);
    if (products) {
      setProducts(products.filter((item) => item.category === categeory));
    }
  }, [products]);

  return (
    <div className='ui celled list' style={{ marginTop:'70px' }}>
        {
            product.map((product) => (
                <Link className='item' to={{ pathname: `/productdetails/${product.id}`}}>
                    <div className='content'>
                        <div className='header'>
                            {product.title}
                        </div>
                        <div>
                            <img src={product.image} alt="Product Image" width="150" height="150" />
                        </div>
                        <div><b>Category: </b>{product.category}</div>
                        <div><b>Price: </b>Rs. {product.price}</div>
                        <div><b>Description: </b>{product.description}</div>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.allProducts.products,
});

export default connect(mapStateToProps, null)(ProductCard);
