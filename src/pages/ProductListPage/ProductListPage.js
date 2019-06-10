import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import * as Actions from '../../actions/index';
import {Link} from 'react-router-dom';

class ProductListPage extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { products: []};
    // }

    componentWillMount() {
        // Api.getAll().then((response) => {
        //     this.setState({
        //         products: response.data
        //     })
        // });
        this.props.fetchProduct();
    }

    onDeleteProduct = (id, index) => {
        // var {products} = this.state;
        // Api.callApi(`products/${id}`, 'DELETE', null)
        // .then((res) => {
        //     if (res.status === 200) {
        //         products.splice(index, 1);
        //         this.setState({
        //             products: products
        //         })
        //     }
        // });
        this.props.deleteProduct(id, index);
    }

    render() {
        var products = this.props.products ? this.props.products : [];
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-info mb-10">
                    Add Product
                </Link>
                <ProductList>
                    {this.showProductItems(products)}
                </ProductList>
            </div>
        )
    }

    showProductItems = (products) => {
        var result = null;

        if (products && products.length > 0) {
            result = products.map((product, index) => {
                return(
                    <ProductItem key={index} index={index} product={product} onDeleteProduct={this.onDeleteProduct} />
                )
            });
        }

        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchProduct: () => {
            dispatch(Actions.fetchProductRequest());
        },
        deleteProduct: (id, index) => {
            dispatch(Actions.deleteProductRequest(id, index));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);