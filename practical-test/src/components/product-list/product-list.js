import React from "react";
import ProductItem from '../product-item/product-item';
import filterProducts from '../../services/filter-service';
import formatNumber from '../../services/number-format-service';

export default function ProductList({products, filter}) {
        const filteredProducts = filterProducts(products, filter);
        const total = filteredProducts.reduce((total, { sold, unitPrice }) => total + sold * unitPrice, 0);

        return (
            <table>
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Revenue</th>
                </tr>
                </thead>
                <tbody>
                    <ProductItem products={filteredProducts}></ProductItem>
                </tbody>
                <tfoot>
                <tr>
                    <td>Total</td>
                    <td>{formatNumber(total)}</td>
                </tr>
                </tfoot>
            </table>
        );
};
