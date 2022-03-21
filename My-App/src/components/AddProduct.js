import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { categoryTypes, imageUrl } from './Constants';
import { connect } from 'react-redux';
import { addNewProduct } from '../redux/actions/productActions';

const AddProduct = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState("men's clothing");
    const [price, setPrice] = useState(null);
    const navigate = useNavigate();

  const addProduct = async () => {
      const payload = {
          title,
          description,
          category,
          price,
          image : imageUrl
      };
      props.addNewProduct(payload);
      navigate('/admin');
  }
  return (
    <div className='=ui main' style={{ marginTop: '70px' }}>
        <h2>Add Product</h2>
        <form className='ui form'>
            <div className='field'>
                <label>Title</label>
                <input type="text" name="title" placeholder='Title' onChange={(e) => setTitle(e.currentTarget.value)}/>
            </div>
            <div className='field'>
                <label>Description</label>
                <input type="text" name="description" placeholder='Description' onChange={(e) => setDescription(e.currentTarget.value)}/>
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
                <input type="number" name="Price" placeholder='Price' onChange={(e) => setPrice(e.currentTarget.value)}/>
            </div>
        </form>
        <div style={{ marginTop:'20px'}}>
        <button className='ui button blue' onClick={addProduct}>Add Product</button>
        <Link to='/admin' className='ui button'>Cancel</Link>
        </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
    addNewProduct: params => dispatch(addNewProduct({
        payload: params
    })),
});

export default connect(null, mapDispatchToProps)(AddProduct);
