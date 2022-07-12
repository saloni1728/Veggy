export const addCart=(data)=>{
    return {
        type:"ADD_TO_CART",
        data
    }
}

export const removeCart=(data)=>{
    return {
        type:"REMOVE_FROM_CART",
        data
    }
}