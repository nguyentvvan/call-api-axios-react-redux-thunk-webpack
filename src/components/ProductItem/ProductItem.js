import React, { Component } from 'react';
import * as Api from '../../util/api';
import {Link} from 'react-router-dom';

class ProductItem extends Component {
    render() {
        var { product, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.code}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                    {
                        product.isActive ? 
                            <span className="label label-success">Active</span>
                            : 
                            <span className="label label-warning">Inactive</span>
                    }
                    
                </td>
                <td>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-success mr-10">Edit</Link>
                    <button type="button" className="btn btn-danger" onClick={() => this.onDelete(product.id, index)}>Delete</button>
                </td>
            </tr>
        )
    }

    onDelete = (id, index) => {
        if (confirm('Are you sure you wanna delete this product?')) { //eslint-disable-line
            this.props.onDeleteProduct(id, index);
        }
    }
}

export default ProductItem;