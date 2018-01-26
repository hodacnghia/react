import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'
import { Product } from '../../../../../services/productServices';


interface IProps {
    products: Product[]
}

export class ProductList extends React.Component<IProps> {

    public render() {
        return (
                <table>
                    <tr>
                        <th>Product ID</th>
                        <th>Decription</th>
                        <th>Type</th>
                        <th>Default Unit of Measure</th>
                        <th>Unit Cost(USD)</th>
                    </tr>
                    { this.props.products.map(product => (
                    <tr>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>Inventory</td>
                        <td>PCS</td>
                        <td>{product.unitcost}</td>

                    </tr>
                    ))}
                </table>
        )
    }
}

export default ProductList
