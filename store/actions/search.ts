import * as actionTypes from './actionType'
import productService, {
    Product
} from '../../services/productServices';



const products = productService.generate()

export const searchItemSuccess = (dataSearch: any) => {
    console.log("[search item success]");
    console.log(dataSearch);
    return {
        type: actionTypes.SEARCH_ITEM_SUCCESS,
        dataSearch: dataSearch
    };
};

export const searchItemFail = (error: any) => {
    return {
        type: actionTypes.SEARCH_ITEM_FAIL,
        error: error
    };
}

export const searchItemStart = () => {
    console.log("[search item start]");
    return {
        type: actionTypes.SEARCH_ITEM_START,
    };
};

export const searchItem = (searchKey: any) => {
    return (dispatch: any) => {
        dispatch(searchItemStart());
        var displayedContacts = products.filter((el) => {
            var searchValue = el.name.toLowerCase();

            return searchValue.indexOf(searchKey) !== -1;
        });

        if (displayedContacts.length !== 0) {
            dispatch(searchItemSuccess(displayedContacts))
        } else {
            dispatch(searchItemFail("arrSearch"))
        }
    }

};


export const searchInit = () => {
    return {
        type: actionTypes.SEARCH_INIT
    };
};