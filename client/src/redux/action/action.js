export const item=(data)=>{
    console.log("action",data)
    return{
        type : "PRODUCT",
        payload:data
    }
}