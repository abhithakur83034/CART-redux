import { combineReducers } from 'redux';
import productReducer from './reducer';
import productCart from './cartReducer';
const rootReducer = combineReducers({
  productData :  productReducer,
  cartData:productCart
});


export default rootReducer;