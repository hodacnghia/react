import Link from 'next/link'
import * as React from 'react'
import ProductList from './productlist'
import ProductWide from './productwide'
import { Product } from '../../../../services/productServices';

interface IProps {
    data: Product[],
    view: boolean,
}

export class ProductTable extends React.Component<IProps> {

    render () {
        
        return ( 
          <div> 
            {this.props.view === true ? <ProductList products={this.props.data}/> : <ProductWide products={this.props.data}/>}
          </div>
        );
      }
      }
    export default ProductTable
