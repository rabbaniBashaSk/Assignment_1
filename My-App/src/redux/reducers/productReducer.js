import { ActionTypes } from "../constants/action-types";

const initialstate = {
    products: [],
    selectedProduct: {},
};

export const productReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, selectedProduct: payload };
        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
};
