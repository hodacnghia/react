import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'
import product, {Product} from '../../services/productServices'
import ProductTable from '../../pages/Products/Content/producttable'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'
const a = product.generate();
interface IProps {
    view: boolean;
    data: Product[],
    displayedProducts: Product[],
    onSearch: any,
    search: boolean

}
interface IState {
    displayedProducts: Product[],
    search: boolean

}
class Search extends React.Component<IProps> {


    render() {
        return (
        <div>
        <input type = "text" 
            placeholder = "Search ..."
            onChange = {event => {
                console.log("This is the new value of field myField: " + event.target.value);
                this.props.onSearch(event.target.value); // <-- Propagate the event
              }} autoFocus> 
        </input>
        <ProductTable view={this.props.view} data={this.props.search === true ? this.props.displayedProducts : a } ></ProductTable>        </div>
        )
    }
}

const mapStateToProps = (state: IState) => {
    return{
        displayedProducts: state.displayedProducts,
        search: state.search
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        onSearch: (searchData: string) => dispatch(actions.searchItem(searchData) ),

    }
}
const MyComponent = connect(mapStateToProps, mapDispatchToProps)(Search);
export default MyComponent
