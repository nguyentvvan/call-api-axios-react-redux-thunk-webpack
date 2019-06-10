import * as Types from '../constants/ActionType';

var initialState = [
    // {
    //     "id": 1,
    //     "code": "IP5S",
    //     "name": "Iphone 5S",
    //     "price": 200,
    //     "isActive": false
    // },
    // {
    //     "id": 2,
    //     "code": "IP6P",
    //     "name": "Iphone 6 Plus",
    //     "price": 600,
    //     "isActive": true
    // },
    // {
    //     "id": 3,
    //     "code": "IP7P",
    //     "name": "Iphone 7 Plus",
    //     "price": 900,
    //     "isActive": true
    // },
    // {
    //     "id": 4,
    //     "code": "IPXSP",
    //     "name": "Iphone XS Plus",
    //     "price": 1500,
    //     "isActive": true
    // },
    // {
    //     "id": 5,
    //     "code": "OF1S",
    //     "name": "Oppo F1S",
    //     "price": 450,
    //     "isActive": true
    // },
    // {
    //     "id": 6,
    //     "code": "SSGN8E",
    //     "name": "Samsung Galaxy Note 8 Edge",
    //     "price": 800,
    //     "isActive": true
    // },
    // {
    //     "code": "NL700",
    //     "name": "Nokia Lumia 700",
    //     "price": "150",
    //     "isActive": true,
    //     "id": 7
    // },
    // {
    //     "code": "SSGN7",
    //     "name": "Samsung Galaxy Note 7",
    //     "price": "735",
    //     "isActive": false,
    //     "id": 8
    // }
];

var findProductIndexInProducts = (products, id) => {
    var result = -1;

    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });

    return result;
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCT:
            state = action.products;
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case Types.UPDATE_PRODUCT:
            var index = findProductIndexInProducts(state, action.product.id);
            if (index !== -1){
                state[index] = action.product;
            }
            return [...state];
        case Types.DELETE_PRODUCT:
            state.splice(action.index, 1);
            return [...state];
        default:
            fetch("http://localhost:3000/products")
                .then(response => response.json())
                .then(data => {
                    return data;
                });
            return [...state];
    }
    return [...state];
}

export default productReducer;