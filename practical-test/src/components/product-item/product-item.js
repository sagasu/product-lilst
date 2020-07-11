import React from 'react';
import formatNumber from '../../services/number-format-service';

export default function ProductItem ({ products }) {
    return(
        <>
            {products.map(({ name, sold, unitPrice }) => (
                <tr key={name}>
                    <td>{name}</td>
                    <td>{formatNumber(sold * unitPrice)}</td>
                </tr>
            ))}
        </>
    );
};