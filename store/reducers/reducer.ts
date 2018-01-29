import * as actionTypes from '../actions/actionType'
import productServices,{Product} from '../../services/productServices'
import { updateObject } from '../utility';

const products = productServices.generate();
interface IState {

    displayedProducts: Product[],
    search: boolean,
    loading: boolean
}
const initialState = {
    displayedProducts: products,
    search: false

}

const searchInit = ( state: any, action: any ) => {
    return updateObject( state, { search: false } );
};

const searchItemStart = ( state: any, action: any ) => {
    
    return updateObject( state, { 
        search: true,
    } );
};

const searchItemSuccess = ( state: any, action: any ) => {    

    return updateObject( state, {
        search: true,
        displayedProducts: action.dataSearch 
    } );
};

const searchItemFail = ( state: any, action: any ) => {
    return updateObject( state, { search: false } );
};
const reducer = ( state = initialState, action: any ) => {
    switch ( action.type ) {
        case actionTypes.SEARCH_INIT: return searchInit( state, action );
        case actionTypes.SEARCH_ITEM_START: return searchItemStart( state, action );
        case actionTypes.SEARCH_ITEM_SUCCESS: return searchItemSuccess( state, action )
        case actionTypes.SEARCH_ITEM_FAIL: return searchItemFail( state, action );

        default: return state;
    }
};

export default reducer