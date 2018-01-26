import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'
import productService from '../../../services/productServices'
import Navigation from './navigation'
import Search from '../../../containers/Search'

const TableStyled = styled.table`
  > thead > tr > th {
  }
`
interface IState {
    viewType: boolean,
}
const products = productService.generate()

export class TableTH extends React.Component<{}, IState> {

    state = {
      viewType: false,
    }

    productView = () => {
        this.setState({viewType: !this.state.viewType})
    }
    render () {
        const { viewType } = this.state
        return (
            <div>
                <button onClick={this.productView}>Change View</button>
                <Search 
                    view={this.state.viewType}
                    data={products}
                />                 
            </div>

        )
    }
}
export default TableTH
