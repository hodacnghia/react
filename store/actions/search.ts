import * as actionType from './actionType'


export const search  = (keySearch: string ) =>{
    return {
        type: actionType.SEARCH,
        keySearch: keySearch
    }
}