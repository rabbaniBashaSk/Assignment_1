import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { categoryTypes } from './Constants';
import { fetchSelectedProduct, editSelectedProduct } from '../redux/actions/productActions';

const EditProduct = (props) => {
    const { selectedProduct } = props;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState("men's clothing");
    const [price, setPrice] = useState(null);
    const { pathname } = useLocation();
    const [id, setId] = useState();
    const navigate = useNavigate();
    const [image, setImage] = useState('');

    useEffect(() => {
        if (selectedProduct) {
            setTitle(selectedProduct.title);
            setDescription(selectedProduct.description);
            setCategory(selectedProduct.category);
            setPrice(selectedProduct.price);
            setImage(selectedProduct.image);
            setId(selectedProduct.id);
        }
    }, [selectedProduct]);

    useEffect(() => {
        const prodId = pathname.split('/')[2];
        if (prodId) {
            props.fetchSelectedProduct(prodId);
        }
    }, [pathname]);

    const editProduct = async () => {
        const payload = {
            id,
            title,
            description,
            category,
            price,
            image
        };
        props.editSelectedProduct(payload);
        navigate('/admin');
    };
    return (
        <div className='=ui main' style={{ marginTop: '70px' }}>
            <h2>Edit Product</h2>
            <form className='ui form'>
                <div className='field'>
                    <label>Title</label>
                    <input type="text" name="title" placeholder='Title' value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
                </div>
                <div className='field'>
                    <label>Description</label>
                    <input type="text" name="description" placeholder='Description' value={description} onChange={(e) => setDescription(e.currentTarget.value)} />
                </div>
                <div className='field'>
                    <label>Category</label>
                    <select type="text" name="Category" onChange={(e) => setCategory(e.currentTarget.value)} value={category}>
                        {
                            categoryTypes.map((item) => (
                                <option id={item.id} value={item.value}>{item.type}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='field'>
                    <label>Price</label>
                    <input type="number" name="Price" placeholder='Price' value={price} onChange={(e) => setPrice(e.currentTarget.value)} />
                </div>
            </form>
            <div style={{ marginTop: '20px' }}>
                <button className='ui button blue' onClick={editProduct}>Edit Product</button>
                <Link to='/admin' className='ui button'>Cancel</Link>
            </div>
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
    editSelectedProduct: params => dispatch(editSelectedProduct({
        payload: params
    })),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);