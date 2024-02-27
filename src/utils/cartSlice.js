import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Mutating the state here.
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; // []  Or I can return an empty object return { items : [] }
      // - RTK says that either I need to mutate the existing state of return a new state.
      // console.log(current(state));  To console log in redux we have to use current state. Else it will show only some proxy objects.
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

//cartSlice will be kind of like a big object which has actions and reducer.
