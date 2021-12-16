import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux"
import reducer from "./reducer"
import { Provider } from "react-redux";

const initialStore = {
  cart: cartItems,
  total: 10,
  amount: 0
}
const store = createStore(reducer, initialStore)

function App() {

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;


// redux: state management library, predictable, single source of truth,
// it has life cycle data flow: between >> actions >> reducer >> store >>> <UI>\
// dispatcher fires actions, reducer looks for them if finds mathing the takes next decision
// otherwise just return original, old data


//reducer - used to update our store,takes two inputs [arg], state,action
//state-initial or prev, old state
//action-what should happen next
//if there is matching action in my reducer function, return updated
// return old state