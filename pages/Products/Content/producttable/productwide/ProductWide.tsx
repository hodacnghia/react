import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'
import { Product } from '../../../../../services/productServices';


interface IProps {
    products: Product[],

}
class ProductWide extends React.Component<IProps > {
    constructor(props: IProps) {
        super(props)
    }
    render() {
        return (
            < div>
                   {this.props.products.map((product) => (

                    <div>
                        <p>{product.name}</p>
                        <p>{product.id}</p>
                        <p>{product.unitcost}</p>
                    </div>
                     ))}
            </div>
        )
    }
}

export default ProductWide
