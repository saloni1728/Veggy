const initialState={
    cartItemsAdd:[]
};

export const CartValue=(state=initialState,action)=>{
    let data=action.data
    switch(action.type){
        case 'ADD_TO_CART':
            const items=state.cartItemsAdd;
            items.push(data);
            return {...state,cartItemsAdd:items};
        case 'REMOVE_FROM_CART':
            const items2=state.cartItemsAdd;
            let indexOfItem=state.cartItemsAdd.findIndex(x=>x.id==data.id);
            items2.splice(indexOfItem,1);
            // console.log(items2);
            return {...state,cartItemsAdd:items2};
        default:
            return {...state};
    }
}
