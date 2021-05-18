import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../shared/utility';

const initialState = {
   loading: false,
   products: [],
}

const storeProduct = (state, action) => {
   return updateObject(state, action.data);
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.PRODUCT_STORE:
         return storeProduct(state, action);
      default:
         return state;
   }
};

export default reducer;