import api from "../../api/products";
import { ActionTypes } from "../constants/action-types";

export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await api.get('/products');
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data })
    } catch (e) {
        alert('Something went wrong.');
    }
};

export const fetchSelectedProduct = (params) => async (dispatch) => {
    const id = params.payload;
    try {
        const response = await api.get(`/products/${id}`);
        dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data })
    } catch (e) {
        alert('Something went wrong.');
    }
};

export const removeSelectedProduct = (params) => async (dispatch) => {
    const id = params.payload;
    try {
        await api.delete(`/products/${id}`);
        dispatch(fetchProducts());
        alert('Selected product deleted successfully.');
    } catch (e) {
        alert('Something went wrong.');
    }    
};

export const editSelectedProduct = (params) => async (dispatch) => {
    const { id } = params.payload;
    try {
        await api.put(`/products/${id}`, params.payload);
        dispatch(fetchProducts());
        alert('Selected product updated successfully.');
    } catch (e) {
        alert('Something went wrong.');
    }
};

export const addNewProduct = (params) => async (dispatch) => {
    try {
        await api.post(`/products`, params.payload);
        dispatch(fetchProducts());
        alert('New product added successfully.');
    } catch (e) {
        alert('Something went wrong.');
    }
};
