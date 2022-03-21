import api from "../../api/products";
import { ActionTypes } from "../constants/action-types";

export const fetchProducts = () => async (dispatch) => {
    const response = await api.get('/products');
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data })
};

export const fetchSelectedProduct = (params) => async (dispatch) => {
    const id = params.payload;
    const response = await api.get(`/products/${id}`);
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data })
};

export const removeSelectedProduct = (params) => async (dispatch) => {
    const id = params.payload;
    await api.delete(`/products/${id}`);
    dispatch(fetchProducts());
};

export const editSelectedProduct = (params) => async (dispatch) => {
    const { id } = params.payload;
    await api.put(`/products/${id}`, params.payload);
    dispatch(fetchProducts());
};

export const addNewProduct = (params) => async (dispatch) => {
    await api.post(`/products`, params.payload);
    dispatch(fetchProducts());
};
