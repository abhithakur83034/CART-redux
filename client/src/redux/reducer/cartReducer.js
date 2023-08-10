const productCart = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let productInState = state.find(
        (product) => product._id === action.payload._id
      );
      if (productInState) return state;
      return[...state,action.payload]
    }

    case "INCREMENT":{
        let updateState = [...state];

        state.forEach((product,index)=>{
            if(product._id === action.payload._id) updateState[index].quantity += 1;

        });
        return [...updateState]
    }

    case "DECREMENT":{
        let updateState = [...state];

        state.forEach((product,index)=>{
            if(product._id === action.payload._id && updateState[index].quantity > 1)
            updateState[index].quantity -= 1
        });
        return [...updateState]
    }


    case"REMOVE_ALL":{
        let updateState = state.filter((product)=>product._id !== action.payload._id)
        return [...updateState]
    }
    default:
      return state;
  }
};

export default productCart;
