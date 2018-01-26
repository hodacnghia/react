import * as actionType from './actions'
import productServices,{Product} from '../services/productServices'
const products = productServices.generate();
interface IState {

    displayedProducts: Product[],
}
const initialState = {
    displayedProducts: products,
}

const reducer = (state = initialState, action: any) => {
    switch (action.type){
        case actionType.SEARCH:
        return {
            ...state,
            displayedProducts: action.data
        };

    }
   
    return state;
}

export default reducer