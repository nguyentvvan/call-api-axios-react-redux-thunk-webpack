import React from 'react';
import Homepage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';

const routes = [
    {
        path: '/',
        name: 'Home page',
        exact: true,
        main: () => <Homepage />
    },{
        path: '/products',
        name: 'Product list',
        exact: false,
        main: () => <ProductListPage />
    },{
        path: '/product/add',
        name: 'Add product',
        exact: false,
        main: ({history}) => <ProductActionPage history={history} />
    },{
        path: '/product/:id/edit',
        name: 'Edit product',
        exact: false,
        main: ({match, history}) => <ProductActionPage match={match} history={history} />
    },{
        path: '',
        name: 'Error',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;