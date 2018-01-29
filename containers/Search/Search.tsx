import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'
import {Product} from '../../services/productServices'
import ProductTable from '../../pages/Products/Content/producttable'
import {connect} from 'react-redux'
import * as actionType from '../../store/actions/actionType'

interface IProps {
    view: boolean;
    data: Product[],
    displayedProducts: Product[],
    onSearch: any,

}
interface IState {
    displayedProducts: Product[],
}
class Search extends React.Component<IProps> {
    state = {
        displayedContacts: this.props.data
    }
      handleSearch =(event:any) => {
        const searchQuery = event.target.value.toLowerCase();
        const displayedProducts = this.props.data.filter((el)  =>{
          const searchValue = el.name.toLowerCase();
    
          return searchValue.indexOf(searchQuery) !== -1;
        });
    
        this.props.onSearch(displayedProducts)    
      }
    render() {
        return (
        <div>
        <input type = "text" 
            placeholder = "Search ..."
            onChange = {this.handleSearch} autoFocus> 
        </input>
        <ProductTable view={this.props.view} data={this.props.displayedProducts} ></ProductTable>        </div>
        )
    }
}

const mapStateToProps = (state: IState) => {
    return{
        displayedProducts: state.displayedProducts,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        onSearch: (dataSearch: Product[]) => dispatch({type: actionType.SEARCH, data: dataSearch }),
    

    }
}
const MyComponent = connect(mapStateToProps, mapDispatchToProps)(Search);
export default MyComponent
