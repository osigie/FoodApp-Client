import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import mealReducer from "../features/meals/meals"
import adminReducer from "../features/admin/admin"

export const store = configureStore({
  reducer: {
   cart: cartReducer,
   meals:mealReducer,
   admin:adminReducer

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
