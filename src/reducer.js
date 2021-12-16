import { DECREASE, INCREASE, REMOVE, CLEAR } from "./actions"



import cartItems from "./cart-items";
// const initialStore = {
//     cart: cartItems,
//     total: 0,
//     amount: 100
// }


function reducer(state, action) {
    // switch(action){
    //     case DECREASE:
    //         return "decre"
    //     case INCREASE:
    //         return "incre"
    //     default:
    //         return state
    // }

    if (action.type === DECREASE) {
        let temp = state.cart.map(item => {
            if (item.id === action.payload.id) {
                item = { ...item, amount: item.amount - 1 }
            }
            return item
        })
        return { ...state, cart: temp }
    } if (action.type === INCREASE) {
        console.log(action.payload.id)
        let temp = state.cart.map(item => {
            if (item.id === action.payload.id) {
                item = { ...item, amount: item.amount + 1 }
            }
            return item
        })
        return { ...state, cart: temp }
    } if (action.type === REMOVE) {
        console.log("remove items")
    } if (action.type === CLEAR) {
        return { ...state, cart: [] }
    }
    return state;
}

export default reducer;