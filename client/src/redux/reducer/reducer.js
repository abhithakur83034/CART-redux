const initialState = {
    data : []
}

const productReducer = (state=initialState,action)=>{
    console.log("reducer",action.payload)
switch(action.type){
    case "PRODUCT":
        return{
            ...state,
            data:action.payload
        }
        default:
            return state;
}
}

export default productReducer;