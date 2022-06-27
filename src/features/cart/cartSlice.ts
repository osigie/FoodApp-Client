import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";

export type mealObj = {
  id: string;
  name: string;
  description: string;
  price: number;
  amount: number;

};

export interface cartState {
  items: Array<mealObj>;
  totalAmount: number;
  showSideBar:Boolean
}

const initialState: cartState = {
  items: [],
  totalAmount: 0,
  showSideBar:false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const index = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      const existingCartItem = state.items[index];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[index] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }
      state.items = updatedItems;
      state.totalAmount = updatedTotalAmount;
    },
    removeItemFromCart: (state, action) => {
      const index = state.items.findIndex((item) => {
        return item.id === action.payload;
      });
      const existingCartItem = state.items[index];
      let updatedItems;
      if (existingCartItem.amount > 1) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        updatedItems = [...state.items];
        updatedItems[index] = updatedItem;
        state.items = updatedItems;
        state.totalAmount = updatedTotalAmount;
      } else {
        const newData = state.items.filter((item) => {
          return item.id !== action.payload;
        });

        state.items = newData;
        state.totalAmount = state.totalAmount - existingCartItem.price;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
    toggleSideBar:(state)=>{
      state.showSideBar = !state.showSideBar;
    }
  },
});

export const { addItemToCart, removeItemFromCart, clearCart, toggleSideBar } =
  cartSlice.actions;

export default cartSlice.reducer;
