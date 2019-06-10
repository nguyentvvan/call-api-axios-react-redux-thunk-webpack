import * as Types from '../constants/ActionType';
import * as Api from '../util/api';

export const fetchProductRequest = () => {
    return (dispatch) => {
        return Api.getAll().then(res => {
            if (res.status === 200) {
                dispatch(fetchProduct(res.data));
            }
        });
    }
}

export const fetchProduct = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        products: products
    }
}

export const updateProductRequest = (product) => {
    return (dispatch) => {
        return Api.callApi(`products/${product.id}`, 'PUT', product)
        .then(res => {
            if (res.status === 200) {
                dispatch(updateProduct(res.data));
            }
        });
    }
}

export const updateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product: product
    }
}

export const addProductRequest = (product) => {
    return (dispatch) => {
        return Api.addNew({
            code: product.code,
            name: product.name,
            price: product.price,
            isActive: product.isActive
        }).then(res => {
            if (res.status === 201) {
                dispatch(addProduct(res.data));
            }
        });
    }
}

export const addProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product: product
    }
}

export const deleteProductRequest = (id, index) => {
    return (dispatch) => {
        return Api.callApi(`products/${id}`, 'DELETE', null)
        .then((res) => {
            if (res.status === 200) {
                dispatch(deleteProduct(index));
            }
        });
    }
}

export const deleteProduct = (index) => {
    return {
        type: Types.DELETE_PRODUCT,
        index: index
    }
}