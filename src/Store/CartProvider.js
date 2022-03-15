import {useReducer} from 'react';
import CartContext from "./Cart-Context";

const defaultCartState = {
    items: [],
    TotalAmount: 0
}
const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.TotalAmount + action.item.price * action.item.amount;
        return {
            items : updatedItems,
            TotalAmount : updatedTotalAmount
        };
    }
    return defaultCartState;
}

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item})
    };

    const removeItemCartHandler = id => {};

    const cartContext = {
        items: cartState.items,
        TotalAmount : cartState.TotalAmount, 
        addItem: addItemCartHandler ,
        removeItem: removeItemCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;