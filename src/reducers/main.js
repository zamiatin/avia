import { Map } from 'immutable';
import { FETCH_SUCCESS } from '../actions';

const initialState = Map({
  data: null,
});

const products = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case FETCH_SUCCESS:
     return state.update("data", () => data);

    // case CHANGE_AMOUNT:
    //  return Object.assign({}, state, {
    //    dataCart: state.dataCart.map((target, index) => {
    //      if (index == action.id) {
    //        return Object.assign({}, target, {
    //          amount: action.amount,
    //          quantity: action.quantity
    //        })
    //      }

    //      return target
    //    })
    //  });

    //  case DELETE_PRODUCT:
    //    return Object.assign({}, state, {
    //      dataCart: state.dataCart.filter((item, i) =>
    //        i != action.id)
    //    });

    default:
      return state;
  }
};


export default products;
