import Link from 'next/link'
import * as React from 'react'
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk';

import {Provider} from 'react-redux'
import styled from 'styled-components'
import Categories from '../../services/categoryServices'
import productService from '../../services/productServices'
import Vendors from '../../services/vendorServices'
import Content from './Content'
import SideBar from './Sidebar'
import Aux from '../../hoc/Aux'
import searchReducer from '../../store/reducers/reducer'


const composeEnhancers = compose;

const rootReducer = combineReducers({
    sReducer: searchReducer,
});
const logger = (store: any) => {
    return (next: any) => {
        return (action: any) => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
};


const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(logger, thunk)
));


const Background = styled.section`
    background: red;
    width:100%;

`
const products = productService.generate()
const categories = Categories.generate()
const vendors = Vendors.generate()
class Products extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Aux>
                    <div>
                        <SideBar />
                        <Content />
                    </div>
                </Aux>
            </Provider>
 

        )
    }
}
export default Products
