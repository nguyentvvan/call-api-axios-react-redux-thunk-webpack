import React, { Component } from 'react';
import * as Api from '../../util/api';
import { connect } from 'react-redux';
import * as Actions from '../../actions/index';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            txtCode: "",
            txtName: "",
            txtPrice: "",
            chkbActive: true
        };
    }

    componentWillMount() {
        var {match} = this.props;
        if (match) {
            var id = match.params.id;
            Api.callApi(`products/${id}`, 'GET')
            .then(res => {
                this.setState({
                    id: res.data.id,
                    txtCode: res.data.code,
                    txtName: res.data.name,
                    txtPrice: res.data.price,
                    chkbActive: res.data.isActive
                });
            });
        }
    }

    onChange = (event) => {
        var target = event.target;
        this.setState({
            [target.name]: target.type === "checkbox" ? target.checked : target.value
        });
    }

    onSaveProduct = (event) => {
        event.preventDefault();
        var {id, txtCode, txtName, txtPrice, chkbActive} = this.state;
        var {history} = this.props;
        if (id) {
            // Api.callApi(`products/${id}`, 'PUT', {
            //     code: txtCode,
            //     name: txtName,
            //     price: txtPrice,
            //     isActive: chkbActive
            // }).then((response) => {
            //     if (response.status === 200) {
            //         history.goBack();
            //     }
            // });
            this.props.updateProduct({
                id: id,
                code: txtCode,
                name: txtName,
                price: txtPrice,
                isActive: chkbActive
            });
            history.goBack();
        } else {
            // Api.addNew({
            //     code: txtCode,
            //     name: txtName,
            //     price: txtPrice,
            //     isActive: chkbActive
            // }).then((response) => {
            //     if (response.status === 201) {
            //         history.goBack();
            //     }
            // });
            this.props.addProduct({
                code: txtCode,
                name: txtName,
                price: txtPrice,
                isActive: chkbActive
            });
            history.goBack();
        }
    }

    onGoBack = () => {
        var {history} = this.props;
        history.goBack();
    }

    render() {
        var {txtCode, txtName, txtPrice, chkbActive} = this.state;
        
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">Add Product</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSaveProduct}>
                            <div className="form-group">
                                <label>Code:</label>
                                <input type="text" className="form-control" name="txtCode" 
                                    value={txtCode} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" className="form-control" name="txtName" 
                                    value={txtName} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label>Price:</label>
                                <input type="text" className="form-control" name="txtPrice"  
                                    value={txtPrice} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" name="chkbActive"
                                            value={chkbActive} checked={chkbActive} onChange={this.onChange}  />
                                        Active
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success mr-10">Save</button>
                            <button type="button" className="btn btn-danger" onClick={this.onGoBack}>Go back</button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addProduct: (product) => {
            dispatch(Actions.addProductRequest(product));
        },
        updateProduct: (product) => {
            dispatch(Actions.updateProductRequest(product));
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductActionPage);